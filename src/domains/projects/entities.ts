export type ProjectStatus = 'Prototype' | 'Live' | 'Live Product' | 'Case Study' | 'Stealth Mode' | 'Startup' | 'Founded';

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
  driveFileId?: string; // Google Drive file ID for embedded viewing
}

