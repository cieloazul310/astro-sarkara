import { defineConfig } from "@pandacss/dev";
import sarkaraPresetBase from "@cieloazul310/panda-preset-sarkara-base";
import patterns from "./src/patterns";
// import recipes from "./src/recipes";

export default defineConfig({
  presets: ["@pandacss/dev/presets", sarkaraPresetBase],

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.astro"],

  // Files to exclude
  exclude: [],

  patterns,

  // The output directory for your css system
  outdir: "@cieloazul310/sarkara-css",
  emitPackage: true,
});
