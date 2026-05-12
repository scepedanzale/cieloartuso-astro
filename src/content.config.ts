// src/content.config.ts

import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/blog",
  }),
  schema: z.object({
    title: z.string(),
    displayTitle: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    cover: z.string(),
    readingTime: z.number(),
    tag: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  blog,
};