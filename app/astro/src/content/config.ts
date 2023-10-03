/* eslint import/prefer-default-export: off */
import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};
