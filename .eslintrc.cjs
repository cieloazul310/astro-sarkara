// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@repo/eslint-config/index.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  ignorePatterns: ["app/**", "packages/**"],
};
