import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  external: ["styled-system"],
  format: ["cjs", "esm"],
  dts: true,
  outDir: "dist",
});
