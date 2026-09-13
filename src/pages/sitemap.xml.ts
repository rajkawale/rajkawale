import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = (site?.href || 'https://www.rajkawale.com').replace(/\/$/, '');

  // Blog posts (fetched from Blogger at build time)
  const { container } = await import('../core/di/container');
  const blogService = container.getBlogService();
  const allBlogPosts = await blogService.getAllPosts();

  // Static pages
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.9', changefreq: 'monthly' },
    { url: '/work', priority: '0.9', changefreq: 'weekly' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    { url: '/notes', priority: '0.6', changefreq: 'weekly' },
    { url: '/trusted-by', priority: '0.7', changefreq: 'monthly' },
    { url: '/contact', priority: '0.6', changefreq: 'monthly' },
  ];

  // Blog posts
  const blogPages = allBlogPosts.map((post) => ({
    url: `/blog/${post.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: post.publishedAt.toISOString().split('T')[0],
  }));

  // Work / case study pages from the content collection
  const workItems = await getCollection('work');
  const workPages = workItems
    .filter((work) => !work.data.draft)
    .map((work) => ({
      url: `/work/${work.id}`,
      priority: '0.8',
      changefreq: 'weekly',
    }));

  // LinkedIn notes, once any exist
  const linkedinPosts = await getCollection('linkedin', (entry) => !entry.data.draft);
  const notePages = linkedinPosts.map((post) => ({
    url: `/notes/${post.id}`,
    priority: '0.5',
    changefreq: 'monthly',
  }));

  const allPages = [...staticPages, ...blogPages, ...workPages, ...notePages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
      .map(
        (page) => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
    ${'lastmod' in page && page.lastmod ? `    <lastmod>${page.lastmod}</lastmod>` : ''}
  </url>`
      )
      .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
