/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    node: true,
  },
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:astro/recommended",
    "prettier",
    "eslint-config-turbo",
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "import/prefer-default-export": "off",
        "import/no-extraneous-dependencies": "off",
      },
    },
    {
      files: ["panda.config.ts", "tsup.config.ts"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
