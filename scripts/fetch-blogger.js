import { XMLParser } from 'fast-xml-parser';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const RSS_URL = 'https://blog.rajkawale.com/feeds/posts/default?alt=rss';
const OUTPUT_PATH = join(__dirname, '../src/data/external/blogger.json');

async function fetchBloggerPosts() {
  try {
    console.log('Fetching Blogger RSS feed...');
    const response = await fetch(RSS_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const xmlText = await response.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '@_',
      textNodeName: '#text',
    });
    
    const result = parser.parse(xmlText);
    const feed = result.rss?.channel;
    
    if (!feed || !feed.item) {
      console.log('No posts found in RSS feed');
      return [];
    }
    
    const items = Array.isArray(feed.item) ? feed.item : [feed.item];
    
    const posts = items.map((item, index) => {
      // Extract title
      const title = item.title?.['#text'] || item.title || `Post ${index + 1}`;
      
      // Extract canonical URL first (prefer Blogger's URL)
      const link = item.link?.['#text'] || item.link || '';
      const canonicalUrl = link;
      
      // Use Blogger's URL for slug if available, otherwise generate from title
      let slug = '';
      if (canonicalUrl) {
        // Extract slug from Blogger URL (e.g., https://rajkawale.blogspot.com/2024/01/my-post.html)
        const urlMatch = canonicalUrl.match(/\/(\d{4})\/(\d{2})\/([^\/]+)\.html$/);
        if (urlMatch && urlMatch[3]) {
          slug = urlMatch[3];
        } else {
          // Fallback: generate from title
          slug = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
        }
      } else {
        // Generate slug from title if no URL available
        slug = title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '');
      }
      
      // Extract published date
      const pubDate = item.pubDate?.['#text'] || item.pubDate;
      const published = pubDate ? new Date(pubDate).toISOString() : new Date().toISOString();
      
      // Extract content (preserve HTML formatting)
      const content = item['content:encoded']?.['#text'] || 
                     item.description?.['#text'] || 
                     item.description || 
                     '';
      
      // Generate excerpt (first 200 chars, strip HTML for preview only)
      const excerpt = content
        .replace(/<[^>]*>/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .substring(0, 200) + (content.length > 200 ? '...' : '');
      
      // Extract tags/categories
      const categories = item.category || [];
      const tags = Array.isArray(categories)
        ? categories.map((cat) => cat['#text'] || cat || '').filter(Boolean)
        : categories['#text'] 
          ? [categories['#text']]
          : [];
      
      return {
        id: slug,
        title,
        slug,
        published,
        content, // Preserved HTML
        excerpt,
        canonicalUrl,
        tags,
      };
    });
    
    // Ensure output directory exists
    mkdirSync(join(__dirname, '../src/data/external'), { recursive: true });
    
    // Write to JSON file
    writeFileSync(OUTPUT_PATH, JSON.stringify(posts, null, 2), 'utf-8');
    
    console.log(`✅ Successfully fetched and saved ${posts.length} blog posts to ${OUTPUT_PATH}`);
    return posts;
  } catch (error) {
    console.error('❌ Error fetching Blogger posts:', error);
    // Return empty array if file doesn't exist, create empty file
    mkdirSync(join(__dirname, '../src/data/external'), { recursive: true });
    writeFileSync(OUTPUT_PATH, JSON.stringify([], null, 2), 'utf-8');
    return [];
  }
}

fetchBloggerPosts();

