# @cieloazul310/panda-preset-sarkara-base

## 2.1.1

### Patch Changes

- 8d8547b: Components: fix invalid a11y property

## 2.1.0

### Minor Changes

- 4dbb456: astro v5

## 2.0.2

### Patch Changes

- aaa3d05: Set heading TextStyle `overflow-wrap` to `"anywhere"`.

## 2.0.1

### Patch Changes

- c270b7e: Set `wordBreak` to `"auto-phrase"` for all heading components.

  Remove viewTransition option from `<Layout>` component.

  To use view transition, change your code as below:

  ```diff
  ---
  + import { ViewTransitions } from "astro:transitions";
  import { SarkaraLayout } from "@cieloazul310/astro-sarkara";
  ---

  <SarkaraLayout
  - viewTransition
    {...props}
  >
    <slot>
  + <ViewTransitions slot="bottom-of-head" />
  </SarkaraLayout>
  ```

## 2.0.0

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

## 2.0.0-next.1

### Patch Changes

- 4c32f10: fix

## 2.0.0-next.0

### Major Changes

- 36024a2: Prerelease next major

## 1.1.0

### Minor Changes

- 48fce6f: Add astro v4 support and upgrade packages

## 1.0.0

### Major Changes

- cbe0328: # @cieloazul310/astro-sarkara-components

  - add `astroImage` props to `<ArticleListItem>`

## 0.1.0

### Minor Changes

- 57fda61: - feat(preset-base): Add semanticTokens for spacing like as `xs`, `sm`, `md`, `lg` and `xl`.
  - refactor(layout): Refactor margin and gap with spacing token above.

## 0.0.7

### Patch Changes

- 9cb9115: - Add astro check
  - Update packages
  - (components): Add Alert components
  - (layout): Add withBaseUrl to favicon url
  - (layout): Add slots, `top-of-main` and `bottom-of-main`

## 0.0.6

### Patch Changes

- 8b04a9b: fix components and optimize fonts for japanese text

## 0.0.5

### Patch Changes

- ff65bf5: add components and layout slots

## 0.0.4

### Patch Changes

- d18cc0a: Add some feature

## 0.0.3

### Patch Changes

- cebf92f: fix publish workflow

## 0.0.2

### Patch Changes

- 0cac0db: the first release
