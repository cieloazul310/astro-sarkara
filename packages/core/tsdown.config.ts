import { defineConfig } from "tsdown";

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
  format: {
    esm: {
      target: ["esnext"],
    },
    cjs: {
      target: ["node22"],
    },
  },
  dts: true,
  outDir: "dist",
});
