import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/**/*.ts"],
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
