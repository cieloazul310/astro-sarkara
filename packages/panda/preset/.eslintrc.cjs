module.exports = {
  root: true,
  extends: "../../../.eslintrc.cjs",
  rules: {
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.eslint.json",
  },
};
