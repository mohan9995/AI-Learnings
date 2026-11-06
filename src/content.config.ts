import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const faqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

// Common frontmatter fields
const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  author: z.string().default("AI Learnings Team"),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  category: z.string().default("General"),
  faqs: z.array(faqSchema).optional(),
  related: z.array(z.string()).optional(),
  featured: z.boolean().default(false),
  difficulty: z.enum(["Beginner", "Intermediate", "Advanced"]).optional(),
});

// Blogs Collection
const blogs = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blogs" }),
  schema: baseSchema,
});

// Tutorials Collection
const tutorials = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/tutorials" }),
  schema: baseSchema,
});

// Architecture Collection
const architecture = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/architecture" }),
  schema: baseSchema,
});

// Prompts Collection
const prompts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/prompts" }),
  schema: baseSchema.extend({
    systemPrompt: z.string().optional(),
    userPrompt: z.string().optional(),
    inputs: z.array(z.object({ name: z.string(), desc: z.string() })).optional(),
  }),
});

// Releases Collection
const releases = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/releases" }),
  schema: baseSchema.extend({
    version: z.string(),
    type: z.enum(["Major", "Minor", "Patch"]),
  }),
});

// Interview Collection
const interview = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/interview" }),
  schema: baseSchema.extend({
    topic: z.string(),
    difficulty: z.enum(["Beginner", "Intermediate", "Advanced"]),
  }),
});

export const collections = {
  blogs,
  tutorials,
  architecture,
  prompts,
  releases,
  interview,
};
