import { defineCollection, z } from "astro:content";
import { rssSchema } from "@astrojs/rss";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    heroImage: z.string().optional(),
    category: z.string().optional(),
    categoryColor: z.string().optional(),
  }),
});

export const collections = { blog };
