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
      files: ["src/*.ts"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
  ignorePatterns: ["dist"],
};
