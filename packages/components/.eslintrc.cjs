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
      files: ["src/*.ts"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
