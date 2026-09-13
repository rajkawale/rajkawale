import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const workCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: './src/content/work' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()).max(4),
        badge: z.string().optional(),
        // Accept both old and new category values for backward compatibility
        category: z.enum(['shipped', 'professional', 'casestudy', 'founder-led', 'enterprise', 'strategy', 'startup']),
        actionLabel: z.string().optional(),
        actionUrl: z.string().optional(),
        actionType: z.string().optional(),
        priority: z.number().default(100),
        draft: z.boolean().default(false),
        secondaryCTALabel: z.string().optional(),
        secondaryCTAUrl: z.string().optional(),
        pdfUrl: z.string().optional(),
    }),
});

const linkedinCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: './src/content/linkedin' }),
    schema: z.object({
        title: z.string(),
        date: z.string().or(z.date()),
        tags: z.array(z.string()).optional(),
        canonicalUrl: z.string().url().optional(),
        draft: z.boolean().default(false),
    }),
});

export const collections = {
    work: workCollection,
    linkedin: linkedinCollection,
};
