import config from "@repo/eslint-config";

/** @type {import("eslint").Linter.Config[]} */
export default [
  /**
   * reference:
   * https://zenn.dev/suree/articles/71591ec903463d#google-analytics-%E3%81%AE%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AB%E5%AF%BE%E5%BF%9C%E3%81%99%E3%82%8B
   */
  {
    languageOptions: {
      globals: {
        dataLayer: false,
      },
    },
  },
  ...config,
  {
    files: ["postcss.config.ts"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];
