import { getCollection } from 'astro:content';
import type { ILinkedInRepository } from '../../domains/linkedin/repository';
import type { LinkedInPost } from '../../domains/linkedin/entities';

export class LinkedInRepository implements ILinkedInRepository {
  async getAll(): Promise<LinkedInPost[]> {
    const entries = await getCollection('linkedin');
    return entries.map((entry) => this.mapToDomain(entry));
  }

  async getById(id: string): Promise<LinkedInPost | null> {
    const entries = await getCollection('linkedin');
    const entry = entries.find((e) => e.id === id);
    return entry ? this.mapToDomain(entry) : null;
  }

  private mapToDomain(entry: {
    id: string;
    slug: string;
    data: any;
    body?: string;
  }): LinkedInPost {
    const date =
      typeof entry.data.date === 'string'
        ? new Date(entry.data.date)
        : entry.data.date;

    return {
      id: entry.id,
      slug: entry.slug,
      title: entry.data.title,
      content: entry.body || '',
      publishedAt: date,
      tags: entry.data.tags || [],
      canonicalUrl: entry.data.canonicalUrl,
    };
  }
}

