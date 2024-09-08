import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/preset/index.ts"],
  external: ["@pandacss/dev"],
  format: ["cjs", "esm"],
  dts: true,
  outDir: "dist",
});
