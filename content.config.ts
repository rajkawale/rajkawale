import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    status: z.enum(['Prototype', 'Live', 'Live Product', 'Case Study', 'Stealth Mode', 'Startup', 'Founded']),
    techStack: z.array(z.string()),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    thumbnail: z.string(),
    priority: z.number().default(0),
  }),
});

const linkedin = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().or(z.date()),
    tags: z.array(z.string()).optional(),
    canonicalUrl: z.string().url().optional(),
  }),
});

export const collections = {
  projects,
  linkedin,
};

