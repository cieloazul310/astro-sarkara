import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/preset.ts", "src/article-classes.ts"],
  deps: {
    neverBundle: [/^@pandacss\//, /^@cieloazul310\//, "styled-system"],
  },
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
