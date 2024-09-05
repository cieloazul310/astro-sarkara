const path = require("path");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: "@repo/eslint-config/index.cjs",
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: path.resolve(__dirname, "./tsconfig.json"),
      },
    },
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
    {
      files: ["astro.config.ts", "panda.config.ts", "postcss.config.cjs"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
    {
      files: ["postcss.config.cjs"],
      rules: {
        "global-require": "off",
      },
    },
    {
      files: ["src/utils/rehypeClassNamesOptions.ts"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
