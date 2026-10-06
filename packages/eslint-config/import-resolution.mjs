import typescriptEslintParser from "@typescript-eslint/parser";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import { defineConfig } from "eslint/config";
import { importX } from "eslint-plugin-import-x";

export default defineConfig([
  {
    ignores: ["**/.astro/**", "**/styled-system/**", "**/dist/**"],
  },
  {
    files: ["**/*.{js,cjs,mjs,ts,tsx,cts,mts}"],
    languageOptions: {
      parser: typescriptEslintParser,
    },
    plugins: {
      "import-x": importX,
    },
    settings: {
      "import-x/resolver-next": [
        createTypeScriptImportResolver({
          project: ["app/*/tsconfig.json", "packages/*/tsconfig.json"],
        }),
      ],
    },
    rules: {
      "import-x/no-unresolved": "error",
    },
  },
]);
