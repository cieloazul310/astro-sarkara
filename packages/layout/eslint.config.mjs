import config from "@repo/eslint-config";

/** @type {import("eslint").Linter.Config[]} */
export default [
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
];
