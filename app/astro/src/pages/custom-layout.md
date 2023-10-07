---
title: Custom Layout
description: Customizing the default Sarkara layout.
layout: ../layout/custom-layout.astro
---

## Customizing Layout

### Example code

```astro
---
/* src/layout/custom-layout.astro */
import { SarkaraLayout, type SarkaraLayoutProps } from "@cieloazul310/astro-sarkara";
import { css } from "@cieloazul310/sarkara-css/css";
import { siteMetadata, menu } from "../data";

interface Props extends SarkaraLayoutProps {
  // additional props
}
const { ...props } = Astro.props;
---
<SarkaraLayout siteMetadata={siteMetadata} menu={menu}>
  <header slot="header" class={css({ /* ... */ })}>
    <!-- custom header replace default header -->
  </header>

  <header slot="jumbotron" class={css({ /* ... */ })}>
    <!-- custom header replace default jumbotron -->
  </header>

  <div>
    <!-- main contents -->
  </div>

  <div slot="sidebar" class={css({ /* ... */ })}>
    <!-- custom header replace default header -->
  </div>

  <!-- Fragment with slot means hide layout component -->
  <Fragment slot="footer" />

</SarkaraLayout>
```

## Layout slots

### Slots for structure

- `header`
- `jumbotron`
- `sidebar`
- `footer`
- `fab`
- `drawer`

### Slots for insert

- `meta`
- `jumbotron-header`
- `jumbotron-footer`
- `sidebar-top`
- `sidebar-bottom`
- `script`

## Code

<https://github.com/cieloazul310/astro-sarkara/blob/main/packages/layout/src/layout.astro>
