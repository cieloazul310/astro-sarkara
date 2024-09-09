---
"@cieloazul310/panda-preset-sarkara-base": patch
"@cieloazul310/astro-sarkara-layout": patch
"@cieloazul310/astro-sarkara-components": patch
"@cieloazul310/astro-sarkara": patch
"@cieloazul310/astro-sarkara-utils": patch
---

Set `wordBreak` to `"auto-phrase"` for all heading components.

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
