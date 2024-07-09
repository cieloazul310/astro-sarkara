/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: "@repo/eslint-config/index.cjs",
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  ignorePatterns: ["dist"],
};
