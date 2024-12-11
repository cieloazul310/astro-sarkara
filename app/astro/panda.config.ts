import { defineSarkaraConfig } from "@cieloazul310/astro-sarkara/preset";

const config = defineSarkaraConfig({
  palette: { primary: "teal", secondary: "yellow" },
  include: [
    "./src/**/*.{js,ts,astro,mdx}",
    "../../packages/**/src/**/*.{js,ts,astro}",
  ],
  theme: {
    extend: {
      // customize theme
    },
  },
  outdir: "styled-system",
});

export default config;
