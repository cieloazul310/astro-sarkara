import { defineConfig } from "@pandacss/dev";
import {
  createSarkaraPreset,
  astroComponentsPaths,
} from "@cieloazul310/astro-sarkara/preset";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx,astro}",
    ...astroComponentsPaths
  ],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: "@cieloazul310/sarkara-css",
  emitPackage: true,

  presets: [
    "@pandacss/dev/presets",
    createSarkaraPreset({ palette: { primary: "teal", secondary: "yellow" } }),
  ],
});