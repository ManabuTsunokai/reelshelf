import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const locale = z.enum(['ja', 'en']);

const help = defineCollection({
  loader: glob({ base: './src/content/help', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lead: z.string(),
    eyebrow: z.string(),
    locale,
    order: z.number().int().positive(),
  }),
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string(),
    description: z.string(),
    lead: z.string(),
    eyebrow: z.string(),
    locale,
    author: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
  }),
});

const legal = defineCollection({
  loader: glob({ base: './src/content/legal', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lead: z.string(),
    locale,
    updatedAt: z.coerce.date(),
    noindex: z.boolean().default(true),
  }),
});

export const collections = { help, blog, legal };
