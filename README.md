# Astro Sarkara

Astro components and layout package built with Panda CSS.

[![npm version](https://badge.fury.io/js/@cieloazul310%2Fastro-sarkara.svg)](https://badge.fury.io/js/@cieloazul310%2Fastro-sarkara) [![Netlify Status](https://api.netlify.com/api/v1/badges/86a9d564-8ece-455e-a4d7-1f9806f8ebc8/deploy-status)](https://app.netlify.com/sites/astro-sarkara-starter/deploys)

Demo  
<https://cieloazul310.github.io/astro-sarkara>

Astro  
<https://astro.build/>

Panda CSS  
<https://panda-css.com/>

## Setup

### 1. Create Astro project

```sh
npm create astro@latest
```

<https://docs.astro.build/ja/getting-started/>

### 2. Install Panda CSS and configure

```sh
npm install -D @pandacss/dev @pandacss/astro
npx panda init
```

```ts:astro.config.ts
// astro.config.ts
import { defineConfig } from 'astro/config';
import pandacss from '@pandacss/astro';
 
export default defineConfig({
  integrations: [pandacss()],
});
```

```json:package.json
{
  "scripts": {
    "prepare": "panda codegen",
  }
}
```

<https://panda-css.com/docs/installation/astro>

### 3. Add astro-sarkara and configure

```sh
npm install @cieloazul310/astro-sarkara
```

```ts:panda.config.ts
// panda.config.ts
import { defineConfig } from "@pandacss/dev";
import {
  createSarkaraPreset,
  astroComponentsPaths,
} from "@cieloazul310/astro-sarkara/preset";

export default defineConfig({
  // ...,

  // Use astro-sarkara preset and configure primary and secondary color
  presets: [
    "@pandacss/dev/presets",
    createSarkaraPreset({ palette: { primary: "teal", secondary: "yellow" } }),
  ],
    
  // add astroComponentsPaths
  include: ["./src/**/*.{js,ts,astro}", ...astroComponentsPaths],

  // IMPORTANT! change outdir to "@cieloazul310/sarkara-css" and emitPackage
  outdir: "@cieloazul310/sarkara-css",
  emitPackage: true,  
});
```

<https://panda-css.com/docs/references/config>

### 4. Codegen

```sh
rm -rf styled-system
npm run prepare
```

## Usage

### Layout

```astro:/src/pages/index.astro
---
import { SarkaraLayout } from "@cieloazul310/astro-sarkara";

const siteMetadata = {
  title: "Site title",
  description: "Site description",
};
---
<SarkaraLayout siteMetadata={siteMetadata}>
  <!-- contents -->
</SarkaraLayout>
```

### Components

```astro:/src/pages/index.astro
---
import { SarkaraLayout, Paper } from "@cieloazul310/astro-sarkara";
import { css } from "@cieloazul310/sarkara-css";

const siteMetadata = {
  title: "Site title",
  description: "Site description",
};
---
<SarkaraLayout siteMetadata={siteMetadata}>
  <Paper>
    <p class={css({ fontSize: "xl" })}>Hello, Astro</p>
  </Paper>
</SarkaraLayout>
```

## Configure `panda.config.ts`

### 1. Using astro-sarkara preset

```ts:panda.config.ts
import { createSarkaraPreset } from "@cieloazul310/astro-sarkara/preset";

export default defineConfig({
  ...,
  presets: [
    "@pandacss/dev/presets",
    createSarkaraPreset({ palette: { primary: "teal", secondary: "yellow" } }),
  ],
});
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

### 2. Includes `astroComponentsPaths`

```ts:panda.config.ts
import { astroComponentsPaths } from "@cieloazul310/astro-sarkara/preset";

export default defineConfig({
  ...,
  include: ["./src/**/*.{js,ts,astro}", ...astroComponentsPaths],
 });
```

Add `...astroComponentsPaths` to `include` options. `...` means [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

<https://panda-css.com/docs/references/config#include>

### 3. Change `outdir` and set `emitPackage` to `true`

```ts:panda.config.ts
// panda.config.ts
export default defineConfig({
  ...,
  outdir: "@cieloazul310/sarkara-css",
  emitPackage: true,  
});
```

> #### emitPackage
>
> Whether to emit the artifacts to node_modules as a package. Will generate a package.json file that contains exports for each of the the generated outdir entrypoints:

<https://panda-css.com/docs/references/config#emitpackage>
