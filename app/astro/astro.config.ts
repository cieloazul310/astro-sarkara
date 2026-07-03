import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import { unified } from "@astrojs/markdown-remark";
import partytown from "@astrojs/partytown";
import rehypeClassNames from "rehype-class-names";
import mdxClasses from "./src/mdx-classes";

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
    processor: unified({
      rehypePlugins: [[rehypeClassNames, mdxClasses]],
    }),
  },
});
