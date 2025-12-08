import type { BlogPost } from './entities';

export interface IBlogRepository {
  getAll(): Promise<BlogPost[]>;
  getBySlug(slug: string): Promise<BlogPost | null>;
}

