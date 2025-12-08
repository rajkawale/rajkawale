export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt: Date;
  coverImage?: string;
  tags?: string[];
  canonicalUrl?: string;
}

