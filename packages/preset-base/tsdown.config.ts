import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/**/*.ts"],
  deps: {
    neverBundle: [/^@pandacss\//],
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
