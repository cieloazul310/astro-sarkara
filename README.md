# Astro Sarkara

Astro components and layout package built with Panda CSS.

[![npm version](https://badge.fury.io/js/@cieloazul310%2Fastro-sarkara.svg)](https://badge.fury.io/js/@cieloazul310%2Fastro-sarkara) [![Netlify Status](https://api.netlify.com/api/v1/badges/86a9d564-8ece-455e-a4d7-1f9806f8ebc8/deploy-status)](https://app.netlify.com/sites/astro-sarkara-starter/deploys)

Demo  
<https://cieloazul310.github.io/astro-sarkara>

Astro  
<https://astro.build/>

Panda CSS  
<https://panda-css.com/>

## Getting started with the template

```sh
npm create astro@latest -- --template cieloazul310/astro-sarkara-starter
```

<https://github.com/cieloazul310/astro-sarkara-starter>

## Getting started with an empty project

### 1. Create Astro project

```sh
npm create astro@latest
```

<https://docs.astro.build/ja/getting-started/>

### 2. Install Panda CSS and configure

```sh
npm install -D @pandacss/dev
npx panda init
```

```json:package.json
{
  "scripts": {
    "prepare": "panda codegen",
  }
}
```

```js
// postcss.config.cjs
module.exports = {
  plugins: [require("@pandacss/dev/postcss")()],
};
```

<https://panda-css.com/docs/installation/astro>

### 3. Add astro-sarkara and configure

```sh
npm install @cieloazul310/astro-sarkara
```

#### Panda Config

```ts:panda.config.ts
// panda.config.ts
import { defineSarkaraConfig } from "@cieloazul310/astro-sarkara/preset";

export default defineSarkaraConfig({
  palette: { primary: "teal", secondary: "yellow" },
  include: [
    "./src/**/*.{js,jsx,ts,tsx,astro,mdx}", 
    "./node_modules/@cieloazul310/**/*.{js,ts,astro}"
  ],
  
  // ...pandaConfig,
});
```

<https://panda-css.com/docs/references/config>

#### TypeScript Config

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "styled-system/*": ["./styled-system/*"]
    }
  },
}
```

### 4. Codegen

```sh
npm run prepare
```

## Usage

### CSS

```css
/** ./src/index.css */
@layer reset, base, tokens, recipes, utilities;
```

### Layout

```astro
---
// src/pages/index.astro
import { defineSiteMetadata, SarkaraLayout } from "@cieloazul310/astro-sarkara";
import "../index.css";

const siteMetadata = defineSiteMetadata({
  title: "Site title",
  description: "Site description",
});
---
<SarkaraLayout siteMetadata={siteMetadata}>
  <!-- contents -->
</SarkaraLayout>
```

### Components

```astro
---
// src/pages/index.astro
import { 
  defineSiteMetadata, 
  SarkaraLayout, 
  Paper,
} from "@cieloazul310/astro-sarkara";
import { css } from "styled-system";

const siteMetadata = defineSiteMetadata({
  title: "Site title",
  description: "Site description",
});
---
<SarkaraLayout siteMetadata={siteMetadata}>
  <Paper>
    <p class={css({ fontSize: "xl" })}>Hello, Astro</p>
  </Paper>
</SarkaraLayout>
```

## Configure `panda.config.ts`

### 1. Using `defineSarkaraConfig`

```ts:panda.config.ts
// import { defineConfig } from "@pandacss/dev";
import {
  defineSarkaraConfig,
  // createSarkaraPreset,
} from "@cieloazul310/astro-sarkara/preset";

export default defineSarkaraConfig({
  palette: { primary: "teal", secondary: "yellow" },
  include: ["./src/**/*.{js,jsx,ts,tsx,astro,mdx}"],
  
  // ...pandaConfig,
});

/* equivalent to
export default defineConfig({
  presets: [
    "@pandacss/dev/presets",
    createSarkaraPreset({ palette: { primary: "teal", secondary: "yellow" } }),
  ],

  include: ["./src/**/*.{js,ts,astro}", "./node_modules/**/*.{js,ts,astro}"],

  outdir: "styled-system",
});
*/
```

<https://panda-css.com/docs/references/config#presets>

`colors.primary` and `colors.secondary` is required, and you can set any colors.

<https://panda-css.com/docs/customization/theme#colors>

```txt
primary: teal
secondary: yellow
danger: red

  primary.100 => teal.100
  secondary.600 => yellow.600
  danger.800 => red.800
```

## Upgrade to v2 (Breaking Changes)

Using Panda CSS with Astro  
<https://panda-css.com/docs/installation/astro>

### 1. Upgrade dependencies and peer dependencies

```txt
@pandacss/dev >= 40.0.0
```

```sh
npm install astro-icon @iconify-json/mdi
```

Upgrade to Astro Icon v1  
<https://www.astroicon.dev/guides/upgrade/v1/>

### 2. Panda Config

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

### 3. Astro config

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

### 4. TypeScript Config

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

### 5. index.css and Layout

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

### 6. Components

```diff
- import { css } from "@cieloazul310/sarkara-css/css";
+ import { css } from "styled-system/css";
```

### 7. MDX (Optional)

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
