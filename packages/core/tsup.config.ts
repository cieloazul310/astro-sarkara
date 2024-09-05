import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/preset.ts", "src/article-classes.ts"],
  external: [
    "@pandacss/dev",
    "@cieloazul310/astro-sarkara-article-classes",
    "@cieloazul310/panda-preset-sarkara-base",
    "@cieloazul310/astro-sarkara-components",
    "@cieloazul310/astro-sarkara-layout",
    "@cieloazul310/astro-sarkara-utils",
    "styled-system",
  ],
  format: ["cjs", "esm"],
  dts: true,
  outDir: "dist",
});
