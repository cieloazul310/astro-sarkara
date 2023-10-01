module.exports = {
  root: true,
  extends: "custom",
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
      files: ["src/**/*.astro"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
