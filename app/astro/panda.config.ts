import { defineConfig } from "@pandacss/dev";
import { createSarkaraPreset } from "@cieloazul310/astro-sarkara/preset";

export default defineConfig({
  preflight: true,
  presets: [
    "@pandacss/preset-base",
    "@pandacss/preset-panda",
    createSarkaraPreset({ primaryColor: "teal", secondaryColor: "yellow" }),
  ],
  include: [
    "./src/**/*.{js,ts,astro,mdx}",
    "../../packages/**/src/**/*.{js,ts,astro}",
  ],
  theme: {
    extend: {
      // customize theme
    },
  },
  outDir: "styled-system",
});
