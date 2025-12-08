export type ProjectStatus = 'Prototype' | 'Live' | 'Case Study';

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  publishDate: Date;
  status: ProjectStatus;
  techStack: string[];
  repoUrl?: string;
  demoUrl?: string;
  thumbnail: string;
  priority: number;
  content?: string; // MDX body content
}

