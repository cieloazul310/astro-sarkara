module.exports = {
  extends: "custom",
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.astro.json",
  },
  env: {
    node: true,
    browser: true,
    es6: true,
  },
};