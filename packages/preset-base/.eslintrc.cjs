module.exports = {
  root: true,
  extends: "custom",
  ignorePatterns: ["dist"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  rules: {
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
  },
};
