import { defineConfig } from "@pandacss/dev";
import sarkaraPresetBase from "@cieloazul310/panda-preset-sarkara-base";
import patterns from "./src/preset/patterns";
import recipes from "./src/preset/recipes";
import slotRecipes from "./src/preset/slotRecipes";

export default defineConfig({
  presets: ["@pandacss/dev/presets", sarkaraPresetBase],

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{ts,astro}"],

  // Files to exclude
  exclude: [],

  patterns,

  theme: {
    extend: {
      recipes,
      slotRecipes,
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
