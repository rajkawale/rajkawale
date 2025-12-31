import { defineCollection, z } from 'astro:content';

const workCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()).max(4),
        metric: z.string().optional(),
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

export const collections = {
    work: workCollection,
};
