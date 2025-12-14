import { defineCollection, z } from 'astro:content';

const workCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tagline: z.string().optional(),
        description: z.string(),
        tags: z.array(z.string()),
        impact_title: z.string().optional(),
        metric: z.string().optional(),
        badge: z.string().optional(),
        category: z.string(), // Relaxed from enum
        actionLabel: z.string().optional(),
        actionUrl: z.string().optional(),
        actionType: z.string().optional(), // Relaxed from enum
        priority: z.number().default(100),
        draft: z.boolean().default(false),
    }),
});

export const collections = {
    work: workCollection,
};
