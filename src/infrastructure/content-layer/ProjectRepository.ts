import { getCollection } from 'astro:content';
import type { IProjectRepository } from '../../domains/projects/repository';
import type { Project } from '../../domains/projects/entities';

export class ProjectRepository implements IProjectRepository {
  async getAll(): Promise<Project[]> {
    try {
      const entries = await getCollection('projects');
      console.log('📦 ProjectRepository: Found', entries.length, 'entries from getCollection');
      console.log('📦 Entry slugs:', entries.map(e => e.slug));
      const projects = entries.map((entry) => this.mapToDomain(entry));
      console.log('📦 Mapped projects:', projects.map(p => ({ slug: p.slug, title: p.title, priority: p.priority })));
      return projects;
    } catch (error) {
      console.error('❌ ProjectRepository.getAll() error:', error);
      return [];
    }
  }

  async getBySlug(slug: string): Promise<Project | null> {
    const entries = await getCollection('projects');
    const entry = entries.find((e) => e.slug === slug);
    return entry ? this.mapToDomain(entry) : null;
  }

  async getByStatus(status: Project['status']): Promise<Project[]> {
    const entries = await getCollection('projects');
    return entries
      .filter((entry) => entry.data.status === status)
      .map((entry) => this.mapToDomain(entry));
  }

  private mapToDomain(entry: {
    id: string;
    slug: string;
    data: any;
    body?: string;
  }): Project {
    try {
      const publishDate =
        typeof entry.data.publishDate === 'string'
          ? new Date(entry.data.publishDate)
          : entry.data.publishDate;

      const project = {
        id: entry.id,
        slug: entry.slug,
        title: entry.data.title,
        description: entry.data.description,
        publishDate,
        status: entry.data.status,
        techStack: entry.data.techStack || [],
        repoUrl: entry.data.repoUrl,
        demoUrl: entry.data.demoUrl,
        thumbnail: entry.data.thumbnail,
        priority: entry.data.priority ?? 0,
        content: entry.body || '',
      };
      
      console.log('✅ Mapped project:', entry.slug, 'Priority:', project.priority);
      return project;
    } catch (error) {
      console.error('❌ Error mapping project:', entry.slug, error);
      throw error;
    }
  }
}

