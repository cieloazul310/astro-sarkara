import { defineConfig } from "astro/config";
import pandacss from "@pandacss/astro";
import rehypeClassNames from "rehype-class-names";
import { rehypeClassNamesOptions } from "./src/utils";

// https://astro.build/config
export default defineConfig({
  integrations: [pandacss()],
  markdown: {
    rehypePlugins: [[rehypeClassNames, rehypeClassNamesOptions]],
  },
});
