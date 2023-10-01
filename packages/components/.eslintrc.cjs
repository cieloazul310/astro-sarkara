module.exports = {
  root: true,
  extends: "custom",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  ignorePatterns: ["dist"],
  overrides: [
    {
      files: ["panda.config.ts"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
    {
      files: ["src/*.astro", "src/*.ts"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
