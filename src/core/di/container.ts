import type { IBlogRepository } from '../../domains/blog/repository';
import type { IProjectRepository } from '../../domains/projects/repository';
import type { ILinkedInRepository } from '../../domains/linkedin/repository';
import { ProjectRepository } from '../../infrastructure/content-layer/ProjectRepository';
import { BlogRepository } from '../../infrastructure/content-layer/BlogRepository';
import { LinkedInRepository } from '../../infrastructure/content-layer/LinkedInRepository';
import { BlogService } from '../../domains/blog/service';
import { ProjectService } from '../../domains/projects/service';
import { LinkedInService } from '../../domains/linkedin/service';

class DIContainer {
  private projectRepository: IProjectRepository | null = null;
  private blogRepository: IBlogRepository | null = null;
  private linkedInRepository: ILinkedInRepository | null = null;
  private projectService: ProjectService | null = null;
  private blogService: BlogService | null = null;
  private linkedInService: LinkedInService | null = null;

  getProjectRepository(): IProjectRepository {
    if (!this.projectRepository) {
      this.projectRepository = new ProjectRepository();
    }
    return this.projectRepository;
  }

  getBlogRepository(): IBlogRepository {
    if (!this.blogRepository) {
      this.blogRepository = new BlogRepository();
    }
    return this.blogRepository;
  }

  getProjectService(): ProjectService {
    if (!this.projectService) {
      this.projectService = new ProjectService(this.getProjectRepository());
    }
    return this.projectService;
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

