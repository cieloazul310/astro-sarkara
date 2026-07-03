import { defineConfig } from "eslint/config";
import config from "@repo/eslint-config";

export default defineConfig([
  ...config,
  /*
  {
    files: ["*.astro"],
    languageOptions: {
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  },
  */
]);
