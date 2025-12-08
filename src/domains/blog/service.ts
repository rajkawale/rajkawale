import type { IBlogRepository } from './repository';
import type { BlogPost } from './entities';

export class BlogService {
  constructor(private repository: IBlogRepository) {}

  async getAllPosts(): Promise<BlogPost[]> {
    return this.repository.getAll();
  }

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    return this.repository.getBySlug(slug);
  }
}

