import { cwd } from "process";
import { resolve } from "path";
import globals from "globals";
import pluginJs from "@eslint/js";
import turboConfig from "eslint-config-turbo/flat";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import eslintPluginAstro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";
import typescriptEslintParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";

const project = resolve(cwd(), "./tsconfig.json");

/** @type {import("eslint").Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...turboConfig,
  importPlugin.flatConfigs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      "jsx-a11y": jsxA11yPlugin,
    },
  },
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
    },
  },
  {
    settings: {
      "import/resolver": {
        typescript: {
          project,
        },
      },
    },
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: typescriptEslintParser,
        extraFileExtensions: [".astro"],
      },
    },
  },
  eslintConfigPrettier,
];
