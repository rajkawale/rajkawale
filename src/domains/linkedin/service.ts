import type { ILinkedInRepository } from './repository';
import type { LinkedInPost } from './entities';

export class LinkedInService {
  constructor(private repository: ILinkedInRepository) {}

  async getAllPosts(): Promise<LinkedInPost[]> {
    return this.repository.getAll();
  }

  async getPostById(id: string): Promise<LinkedInPost | null> {
    return this.repository.getById(id);
  }
}

