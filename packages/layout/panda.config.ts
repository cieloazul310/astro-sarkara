import { defineConfig } from "@pandacss/dev";
import sarkaraPresetBase from "@cieloazul310/panda-preset-sarkara-base";
import sarkaraComponentsPreset from "@cieloazul310/astro-sarkara-components/preset";

export default defineConfig({
  presets: [
    "@pandacss/dev/presets",
    sarkaraPresetBase,
    sarkaraComponentsPreset,
  ],

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.astro"],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: "styled-system",
});
