/* eslint-disable-next-line import/no-unresolved */
import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const tutorialCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/tutorial" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      index: z.number(),
      featuredImg: image().nullish(),
      featuredImgAlt: z.string().nullish(),
    }),
});

export const collections = {
  tutorial: tutorialCollection,
};
