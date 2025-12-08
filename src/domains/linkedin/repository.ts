import type { LinkedInPost } from './entities';

export interface ILinkedInRepository {
  getAll(): Promise<LinkedInPost[]>;
  getById(id: string): Promise<LinkedInPost | null>;
}

