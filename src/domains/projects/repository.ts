import type { Project } from './entities';

export interface IProjectRepository {
  getAll(): Promise<Project[]>;
  getBySlug(slug: string): Promise<Project | null>;
  getByStatus(status: Project['status']): Promise<Project[]>;
}

