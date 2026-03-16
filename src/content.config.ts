import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    emoji: z.string().optional(),
    bgColor: z.string().optional(),
    readTime: z.number(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
