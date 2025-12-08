import type { IProjectRepository } from './repository';
import type { Project } from './entities';

export class ProjectService {
  constructor(private repository: IProjectRepository) {}

  async getAll(): Promise<Project[]> {
    const projects = await this.repository.getAll();
    // Sort by priority (descending), then by publishDate (descending)
    return projects.sort((a, b) => {
      if (b.priority !== a.priority) {
        return b.priority - a.priority;
      }
      return b.publishDate.getTime() - a.publishDate.getTime();
    });
  }

  async getFeatured(): Promise<Project[]> {
    const projects = await this.getAll();
    // Return projects with priority > 0, sorted by priority
    return projects.filter((p) => p.priority > 0).slice(0, 6);
  }

  async getBySlug(slug: string): Promise<Project | null> {
    return this.repository.getBySlug(slug);
  }

  async getByStatus(status: Project['status']): Promise<Project[]> {
    return this.repository.getByStatus(status);
  }

  async getLiveProjects(): Promise<Project[]> {
    return this.getByStatus('Live');
  }

  async getPrototypes(): Promise<Project[]> {
    return this.getByStatus('Prototype');
  }

  async getCaseStudies(): Promise<Project[]> {
    return this.getByStatus('Case Study');
  }
}

