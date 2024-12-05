/* eslint import/prefer-default-export: off */
import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const tutorialCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/tutorial" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      index: z.number(),
      featuredImg: image()
        .optional()
        .catch((ctx) => {
          /* eslint-disable-next-line @typescript-eslint/no-unused-expressions */
          ctx.error;
          return undefined;
        }),
      featuredImgAlt: z.string().optional(),
    }),
});

export const collections = {
  tutorial: tutorialCollection,
};
