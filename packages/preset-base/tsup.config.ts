import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  external: ["@pandacss/dev"],
  format: ["cjs", "esm"],
  dts: true,
  outDir: "dist",
});
