import { c as container } from '../chunks/container_ChaB-zdo.mjs';
import { g as getCollection } from '../chunks/_astro_content_BGGyxQAG.mjs';
export { renderers } from '../renderers.mjs';

const GET = async ({ site }) => {
  const siteUrl = site?.href || "https://rajkawale.com";
  const blogService = container.getBlogService();
  const allBlogPosts = await blogService.getAllPosts();
  const projectService = container.getProjectService();
  const allProjects = await projectService.getAll();
  const staticPages = [
    { url: "/", priority: "1.0", changefreq: "weekly" },
    { url: "/work", priority: "0.9", changefreq: "weekly" },
    { url: "/blog", priority: "0.8", changefreq: "weekly" },
    { url: "/projects", priority: "0.8", changefreq: "monthly" },
    { url: "/trusted-by", priority: "0.7", changefreq: "monthly" },
    { url: "/contact", priority: "0.6", changefreq: "monthly" }
  ];
  const blogPages = allBlogPosts.map((post) => ({
    url: `/blog/${post.slug}`,
    priority: "0.7",
    changefreq: "monthly",
    lastmod: post.publishedAt.toISOString().split("T")[0]
  }));
  const projectPages = allProjects.map((project) => ({
    url: `/projects/${project.slug}`,
    priority: "0.7",
    changefreq: "monthly"
  }));
  const workItems = await getCollection("work");
  const workPages = workItems.map((work) => ({
    url: `/work/${work.id}`,
    priority: "0.8",
    changefreq: "weekly"
  }));
  const allPages = [...staticPages, ...blogPages, ...projectPages, ...workPages];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(
    (page) => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
    ${"lastmod" in page && page.lastmod ? `    <lastmod>${page.lastmod}</lastmod>` : ""}
  </url>`
  ).join("\n")}
</urlset>`;
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
