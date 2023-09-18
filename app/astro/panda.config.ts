import { defineConfig } from "@pandacss/dev";
import { defineSarkaraPreset } from "@cieloazul310/panda-preset-sarkara";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx,astro}"],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: "styled-system",

  presets: [
    "@pandacss/dev/presets",
    defineSarkaraPreset({ primary: "teal", secondary: "yellow" }),
  ],
});
