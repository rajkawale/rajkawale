export interface LinkedInPost {
  id: string;
  slug: string;
  title?: string;
  content: string;
  publishedAt: Date;
  tags?: string[];
  canonicalUrl?: string;
  engagement?: {
    likes: number;
    comments: number;
  };
}

