import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { topics } from './data/topics';
import { series } from './data/series';
import { authors } from './data/authors';
import { tags } from './data/tags';
import { articleTypes, isPaperBased } from './data/research-editorial';
const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z
    .object({
      title: z.string().min(8).max(120),
      subtitle: z.string().optional(),
      description: z.string().min(30).max(220),
      slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      status: z.enum(['draft', 'published', 'archived']),
      type: z.enum(articleTypes),
      topic: z
        .string()
        .refine((v) => topics.some((t) => t.id === v), 'Unknown topic'),
      subtopics: z.array(z.string()).min(1),
      tags: z
        .array(
          z
            .string()
            .refine(
              (v) => (tags as readonly string[]).includes(v),
              'Unknown canonical tag',
            ),
        )
        .min(1),
      series: z
        .string()
        .refine((v) => series.some((s) => s.id === v), 'Unknown series')
        .optional(),
      seriesOrder: z.number().int().positive().optional(),
      difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
      audience: z.array(z.string()).min(1),
      authors: z
        .array(
          z
            .string()
            .refine((v) => authors.some((a) => a.id === v), 'Unknown author'),
        )
        .min(1),
      featured: z.boolean().default(false),
      hero: z.object({ image: z.string(), alt: z.string().min(5) }).optional(),
      seo: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
        })
        .optional(),
      sources: z
        .array(
          z.object({
            title: z.string().min(5),
            url: z
              .url()
              .refine(
                (value) => /^https?:/.test(value),
                'Use an HTTP(S) source URL',
              ),
            role: z.enum(['primary', 'supporting']),
            kind: z.enum(['paper', 'docs', 'textbook', 'repository']),
            supports: z.string().min(20),
          }),
        )
        .min(1),
      relatedArticles: z.array(z.string()).default([]),
      prerequisites: z.array(z.string()).default([]),
      learningOutcomes: z.array(z.string()).min(1),
    })
    .superRefine((data, ctx) => {
      if (
        data.status === 'published' &&
        isPaperBased(data) &&
        !data.sources.some(
          (source) => source.role === 'primary' && source.kind === 'paper',
        )
      ) {
        ctx.addIssue({
          code: 'custom',
          message:
            'Published paper-based content requires a primary paper with its evidence scope.',
        });
      }
      if (Boolean(data.series) !== Boolean(data.seriesOrder))
        ctx.addIssue({
          code: 'custom',
          message: 'series and seriesOrder must be provided together',
        });
      if (data.updatedAt && data.updatedAt < data.publishedAt)
        ctx.addIssue({
          code: 'custom',
          message: 'updatedAt precedes publication',
        });
      const topic = topics.find((t) => t.id === data.topic);
      for (const subtopic of data.subtopics)
        if (!topic?.subtopics.includes(subtopic))
          ctx.addIssue({
            code: 'custom',
            message: 'Unknown subtopic: ' + subtopic,
          });
    }),
});
export const collections = { articles };
