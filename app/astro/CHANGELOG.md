# astro-app

## 1.1.0

### Minor Changes

- 4dbb456: astro v5

### Patch Changes

- Updated dependencies [4dbb456]
  - @cieloazul310/astro-sarkara@2.1.0

## 1.0.0

### Major Changes

- c011a2c: Using Panda CSS with Astro
  <https://panda-css.com/docs/installation/astro>

  ```txt
  @pandacss/dev >= 40.0.0
  ```

  ```sh
  npm install astro-icon @iconify-json/mdi
  ```

  Upgrade to Astro Icon v1
  <https://www.astroicon.dev/guides/upgrade/v1/>

  ```diff
  // panda.config.ts
  import { defineSarkaraConfig } from "@cieloazul310/astro-sarkara/preset";

  export default defineSarkaraConfig({
    palette: { primary: "teal", secondary: "yellow" },
    include: [
      "./src/**/*.{js,jsx,ts,tsx,astro,mdx}",
  +   "./node_modules/@cieloazul310/**/*.{js,ts,astro}"
    ],
  });
  ```

  ```diff
  // astro.config.ts
  import { defineConfig } from "astro/config";
  +import icon from "astro-icon";

  // https://astro.build/config
  export default defineConfig({
    integrations: [
  +   icon(),
    ],
  });
  ```

  Upgrade to Astro Icon v1
  <https://www.astroicon.dev/guides/upgrade/v1/>

  ```diff
  {
    "compilerOptions": {
  +   "baseUrl": ".",
  +   "paths": {
  +     "styled-system/*": ["./styled-system/*"]
      }
    }
  }
  ```

  Compiler Options / Paths - `paths`
  <https://www.typescriptlang.org/tsconfig/#paths>

  ```css
  /** ./src/index.css */
  @layer reset, base, tokens, recipes, utilities;
  ```

  ```diff
  ---
  // ./src/pages/index.astro

  import { SarkaraLayout } from "@cieloazul310/astro-sarkara/preset";

  + import "../src/index.css";
  ---

  ```

  ```diff
  - import { css } from "@cieloazul310/sarkara-css/css";
  + import { css } from "styled-system/css";
  ```

  ```ts
  // src/mdx-classes.ts

  /**
   * DO NOT use path alias
   * ❌ import { articleClasses } from "styled-system";
   */
  import { articleClasses } from "../styled-system/recipes";

  export default articleClasses();
  ```

  ```shell
  npm install @astrojs/mdx rehype-class-names
  ```

  ```diff
  // astro.config.ts
  import { defineConfig } from "astro/config";
  + import mdx from "@astrojs/mdx";
  + import rehypeClassNames from "rehype-class-names";
  + import mdxClasses from "./src/mdx-classes";

  export default defineConfig({
    integrations: [
  +   mdx(),
    ],
  + markdown: {
  +   rehypePlugins: [[rehypeClassNames, mdxClasses]],
  + },
  });
  ```

  Markdown & MDX
  <https://docs.astro.build/en/guides/markdown-content/>

  Rehype Class Names
  <https://github.com/riderjensen/rehype-class-names>

- 36024a2: Prerelease next major

### Patch Changes

- 4c32f10: fix
- Updated dependencies [d388dc1]
- Updated dependencies [3e2704c]
- Updated dependencies [c011a2c]
- Updated dependencies [fc8d4ad]
- Updated dependencies [4c32f10]
- Updated dependencies [36024a2]
  - @cieloazul310/astro-sarkara@2.0.0

## 1.0.0-next.1

### Patch Changes

- 4c32f10: fix
- Updated dependencies [4c32f10]
  - @cieloazul310/astro-sarkara@2.0.0-next.1

## 1.0.0-next.0

### Major Changes

- 36024a2: Prerelease next major

### Patch Changes

- Updated dependencies [36024a2]
  - @cieloazul310/astro-sarkara@2.0.0-next.0

## 0.2.0

### Minor Changes

- 48fce6f: Add astro v4 support and upgrade packages

### Patch Changes

- Updated dependencies [48fce6f]
  - @cieloazul310/astro-sarkara@1.1.0

## 0.1.1

### Patch Changes

- Updated dependencies [093eeb1]
  - @cieloazul310/astro-sarkara@1.0.0

## 0.1.0

### Minor Changes

- 57fda61: - feat(preset-base): Add semanticTokens for spacing like as `xs`, `sm`, `md`, `lg` and `xl`.
  - refactor(layout): Refactor margin and gap with spacing token above.

### Patch Changes

- Updated dependencies [57fda61]
  - @cieloazul310/astro-sarkara@0.1.0

## 0.0.13

### Patch Changes

- @cieloazul310/astro-sarkara@0.0.13

## 0.0.12

### Patch Changes

- @cieloazul310/astro-sarkara@0.0.12

## 0.0.11

### Patch Changes

- Updated dependencies [3a3369a]
  - @cieloazul310/astro-sarkara@0.0.11

## 0.0.10

### Patch Changes

- Updated dependencies [d8756e2]
  - @cieloazul310/astro-sarkara@0.0.10

## 0.0.9

### Patch Changes

- 9cb9115: - Add astro check
  - Update packages
  - (components): Add Alert components
  - (layout): Add withBaseUrl to favicon url
  - (layout): Add slots, `top-of-main` and `bottom-of-main`
- Updated dependencies [9cb9115]
  - @cieloazul310/astro-sarkara@0.0.9

## 0.0.8

### Patch Changes

- 8b04a9b: fix components and optimize fonts for japanese text
- Updated dependencies [8b04a9b]
  - @cieloazul310/astro-sarkara@0.0.8

## 0.0.7

### Patch Changes

- ff65bf5: add components and layout slots
- Updated dependencies [ff65bf5]
  - @cieloazul310/astro-sarkara@0.0.7

## 0.0.6

### Patch Changes

- Updated dependencies [968f12b]
  - @cieloazul310/astro-sarkara@0.0.6

## 0.0.5

### Patch Changes

- d18cc0a: Add some feature
- Updated dependencies [d18cc0a]
  - @cieloazul310/astro-sarkara@0.0.5

## 0.0.4

### Patch Changes

- Updated dependencies [9bc4dd7]
  - @cieloazul310/astro-sarkara@0.0.4

## 0.0.3

### Patch Changes

- cebf92f: fix publish workflow
- Updated dependencies [cebf92f]
  - @cieloazul310/astro-sarkara@0.0.3

## 0.0.2

### Patch Changes

- Updated dependencies [0cac0db]
  - @cieloazul310/astro-sarkara@0.0.2
