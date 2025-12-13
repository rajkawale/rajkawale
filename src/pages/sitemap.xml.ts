import type { APIRoute } from 'astro';
import { container } from '../core/di/container';

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site?.href || 'https://rajkawale.com';
  
  // Get all blog posts
  const blogService = container.getBlogService();
  const allBlogPosts = await blogService.getAllPosts();
  
  // Get all projects
  const projectService = container.getProjectService();
  const allProjects = await projectService.getAll();
  
  // Static pages
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/work', priority: '0.9', changefreq: 'weekly' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    { url: '/projects', priority: '0.8', changefreq: 'monthly' },
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
  
  // Project pages
  const projectPages = allProjects.map((project) => ({
    url: `/projects/${project.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
  }));
  
  // Combine all pages
  const allPages = [...staticPages, ...blogPages, ...projectPages];
  
  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
    ${page.lastmod ? `    <lastmod>${page.lastmod}</lastmod>` : ''}
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

