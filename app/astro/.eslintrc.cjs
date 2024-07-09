/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: "@repo/eslint-config/index.cjs",
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  overrides: [
    {
      files: ["astro.config.ts", "panda.config.ts"],
      rules: {
        "import/no-extraneous-dependencies": "off",
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
