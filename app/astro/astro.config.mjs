import { defineConfig } from "astro/config";
import pandacss from "@pandacss/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [pandacss()],
});
