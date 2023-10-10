import { defineConfig } from "astro/config";
import pandacss from "@pandacss/astro";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import rehypeClassNames from "rehype-class-names";
import { rehypeClassNamesOptions } from "@cieloazul310/astro-sarkara/classes";

// https://astro.build/config
export default defineConfig({
  integrations: [
    pandacss(),
    mdx(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  markdown: {
    rehypePlugins: [[rehypeClassNames, rehypeClassNamesOptions]],
  },
});
