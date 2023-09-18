module.exports = {
  root: true,
  extends: "../../.eslintrc.cjs",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  overrides: [
    {
      files: ["astro.config.mjs", "panda.config.ts"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
    {
      files: ["src/styles/**/*"],
      rules: {
        "import/no-extraneous-dependencies": "off",
        "no-underscore-dangle": "warn",
        "@typescript-eslint/naming-convention": "warn",
      },
    },
  ],
};
