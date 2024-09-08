/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: "@repo/eslint-config/index.cjs",
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  rules: {
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
  },
  ignorePatterns: ["dist"],
};
