import type { IBlogRepository } from '../../domains/blog/repository';
import type { ILinkedInRepository } from '../../domains/linkedin/repository';
import { BlogRepository } from '../../infrastructure/content-layer/BlogRepository';
import { LinkedInRepository } from '../../infrastructure/content-layer/LinkedInRepository';
import { BlogService } from '../../domains/blog/service';
import { LinkedInService } from '../../domains/linkedin/service';

class DIContainer {
  private blogRepository: IBlogRepository | null = null;
  private linkedInRepository: ILinkedInRepository | null = null;
  private blogService: BlogService | null = null;
  private linkedInService: LinkedInService | null = null;

  getBlogRepository(): IBlogRepository {
    if (!this.blogRepository) {
      this.blogRepository = new BlogRepository();
    }
    return this.blogRepository;
  }

  getBlogService(): BlogService {
    if (!this.blogService) {
      this.blogService = new BlogService(this.getBlogRepository());
    }
    return this.blogService;
  }

  getLinkedInRepository(): ILinkedInRepository {
    if (!this.linkedInRepository) {
      this.linkedInRepository = new LinkedInRepository();
    }
    return this.linkedInRepository;
  }

  getLinkedInService(): LinkedInService {
    if (!this.linkedInService) {
      this.linkedInService = new LinkedInService(this.getLinkedInRepository());
    }
    return this.linkedInService;
  }
}

export const container = new DIContainer();
