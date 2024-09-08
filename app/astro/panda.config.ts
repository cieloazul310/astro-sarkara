import { defineSarkaraConfig } from "@cieloazul310/astro-sarkara/preset";

const config = defineSarkaraConfig({
  palette: { primary: "teal", secondary: "yellow" },
  include: [
    "./src/**/*.{js,ts,astro,mdx}",
    "../../node_modules/@cieloazul310/**/*.{js,ts,astro,mdx}",
  ],
  theme: {
    extend: {
      // customize theme
    },
  },
  outdir: "styled-system",
});

export default config;
