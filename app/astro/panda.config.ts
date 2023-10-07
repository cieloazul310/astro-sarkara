import { defineSarkaraConfig } from "@cieloazul310/astro-sarkara/preset";

export default defineSarkaraConfig({
  palette: { primary: "teal", secondary: "yellow" },
  include: ["./src/**/*.{js,jsx,ts,tsx,astro}"],
});
