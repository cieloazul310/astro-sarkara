module.exports = {
  root: true,
  extends: "custom",
  ignorePatterns: ["dist"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
};
