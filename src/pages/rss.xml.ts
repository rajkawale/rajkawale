import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
    const siteUrl = site?.href || 'https://rajkawale.com';

    // Get all work/projects from content collection
    const allWork = await getCollection('work');
    const sortedWork = allWork.sort((a, b) => a.data.priority - b.data.priority);

    // Generate RSS feed
    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Raj Kawale - AI &amp; SaaS Product Manager</title>
    <description>Portfolio and case studies from Raj Kawale, an AI and SaaS Product Manager working across zero-to-one and scaling tech products.</description>
    <link>${siteUrl}</link>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>rajendrakawale101@gmail.com (Raj Kawale)</managingEditor>
    <webMaster>rajendrakawale101@gmail.com (Raj Kawale)</webMaster>
    
    ${sortedWork.map(work => `
    <item>
      <title>${escapeXml(work.data.title)}</title>
      <description>${escapeXml(work.data.description)}</description>
      <link>${siteUrl}/work/${work.id}</link>
      <guid isPermaLink="true">${siteUrl}/work/${work.id}</guid>
      <dc:creator>Raj Kawale</dc:creator>
      <category>${escapeXml(work.data.category)}</category>
      ${work.data.tags?.map((tag: string) => `<category>${escapeXml(tag)}</category>`).join('\n      ') || ''}
    </item>`).join('\n')}
  </channel>
</rss>`;

    return new Response(rss, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
        },
    });
};

function escapeXml(unsafe: string): string {
    return unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}
