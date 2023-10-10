import { defineConfig } from "astro/config";
import pandacss from "@pandacss/astro";
import mdx from "@astrojs/mdx";
import rehypeClassNames from "rehype-class-names";
import { rehypeClassNamesOptions } from "@cieloazul310/astro-sarkara/classes";

// https://astro.build/config
export default defineConfig({
  integrations: [pandacss(), mdx()],
  markdown: {
    rehypePlugins: [[rehypeClassNames, rehypeClassNamesOptions]],
  },
});
