import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import rehypeClassNames from "rehype-class-names";
import mdxClasses from "./src/mdx-classes";
// import { rehypeClassNamesOptions } from "@cieloazul310/astro-sarkara/classes";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon(),
    mdx(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  markdown: {
    rehypePlugins: [[rehypeClassNames, mdxClasses]],
  },
});
