import type { IBlogRepository } from '../../domains/blog/repository';
import type { BlogPost } from '../../domains/blog/entities';
import { readFileSync } from 'fs';
import { join } from 'path';

export class BlogRepository implements IBlogRepository {
  private posts: BlogPost[] = [];

  async loadPosts(): Promise<void> {
    try {
      // Read JSON file directly using fs
      const filePath = join(process.cwd(), 'src', 'data', 'external', 'blogger.json');
      const fileContent = readFileSync(filePath, 'utf-8');
      const rawPosts = JSON.parse(fileContent);
      
      if (!Array.isArray(rawPosts)) {
        console.warn('Blogger.json does not contain an array');
        this.posts = [];
        return;
      }
      
      this.posts = rawPosts.map((post: any) => ({
        id: post.id || post.slug,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        publishedAt: new Date(post.published),
        coverImage: post.coverImage,
        tags: post.tags || [],
        canonicalUrl: post.canonicalUrl,
      }));
      
      console.log(`Loaded ${this.posts.length} blog posts`);
    } catch (error) {
      console.error('Error loading Blogger.json:', error);
      this.posts = [];
    }
  }

  async getAll(): Promise<BlogPost[]> {
    if (this.posts.length === 0) {
      await this.loadPosts();
    }
    return this.posts.sort((a, b) => 
      b.publishedAt.getTime() - a.publishedAt.getTime()
    );
  }

  async getBySlug(slug: string): Promise<BlogPost | null> {
    if (this.posts.length === 0) {
      await this.loadPosts();
    }
    return this.posts.find((post) => post.slug === slug) || null;
  }
}

