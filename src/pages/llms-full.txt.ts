import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = (site?.href || 'https://www.rajkawale.com').replace(/\/$/, '');

  const workItems = (await getCollection('work'))
    .filter((item) => !item.data.draft)
    .sort((a, b) => a.data.priority - b.data.priority);

  const { container } = await import('../core/di/container');
  const blogService = container.getBlogService();
  const blogPosts = await blogService.getAllPosts();

  const parts: string[] = [];

  parts.push(`# Raj Kawale — Full Content Index\n`);
  parts.push(
    `Product Lead building GenAI and Agentic AI systems for healthcare organizations at Indegene, and the founder behind KOS (an exocortex) and RaiTalk. Canonical profile: ${siteUrl}/about\n`,
  );

  parts.push(`\n## Case Studies\n`);
  for (const item of workItems) {
    parts.push(`\n### ${item.data.title}\n`);
    parts.push(`Source: ${siteUrl}/work/${item.slug}\n`);
    parts.push(`${item.data.description}\n`);
    parts.push(item.body || '');
  }

  parts.push(`\n## Writing\n`);
  for (const post of blogPosts) {
    parts.push(`\n### ${post.title}\n`);
    parts.push(`Source: ${siteUrl}/blog/${post.slug}\n`);
    if (post.excerpt) parts.push(`${post.excerpt}\n`);
  }

  return new Response(parts.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
