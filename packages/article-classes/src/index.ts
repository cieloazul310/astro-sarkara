import { cx, css } from "@cieloazul310/sarkara-css/css";
import { paper, divider } from "@cieloazul310/sarkara-css/patterns";
import type { SystemStyleObject } from "@cieloazul310/sarkara-css/types";

const common: SystemStyleObject = {
  _first: {
    mt: 0,
  },
  _last: {
    mb: 0,
  },
};

export const heading1 = css({
  ...common,
  textStyle: "headings",
  fontSize: ["xl", "2xl", "4xl"],
  mt: 12,
  mb: 6,
});

export const heading2 = css({
  ...common,
  textStyle: "headings",
  fontSize: ["xl", "2xl", "3xl"],
  mt: 12,
  mb: 4,
});

export const heading3 = css({
  ...common,
  textStyle: "headings",
  fontSize: ["lg", "lg", "2xl"],
  mt: 12,
  mb: 4,
});

export const heading4 = css({
  ...common,
  textStyle: "headings",
  fontSize: ["md", "lg", "xl"],
  mt: 8,
  mb: 4,
});

export const heading5 = css({
  ...common,
  textStyle: "headings",
  fontSize: ["md", "md", "lg"],
  mt: 4,
  mb: 2,
});

export const paragraph = css({
  ...common,
  fontSize: "md",
  my: 2,
  overflowWrap: "break-word",
});

export const anchor = css({
  color: { base: "primary.700", _hover: "primary.500" },
  textDecoration: { _hover: "underline" },
  _dark: { color: { base: "primary.300", _hover: "primary.200" } },
});

export const blockquote = cx(
  css({ colorPalette: "primary" }),
  paper({
    my: 4,
  }),
);

export const table = cx(
  css({ colorPalette: "primary" }),
  paper({
    width: "100%",
    borderWidth: "1px",
    borderColor: { base: "primary.50", _dark: "primary.950" },
    my: 8,
    fontSize: ["sm", "md"],
  }),
);

export const thead = paper();

export const tr = css({
  borderColor: { base: "primary.50", _dark: "primary.950" },
  borderBottomWidth: "1px",
  _last: {
    borderBottomWidth: 0,
  },
});

export const th = css({
  p: 4,
});

export const td = css({
  p: 4,
});

export const hr = divider({
  orientation: "horizontal",
  color: { base: "primary.50", _dark: "primary.950" },
  my: 8,
});

export const unorderedList = css({
  ...common,
  my: 4,
  listStyleType: "disc",
  paddingInlineStart: 4,
});

export const orderedList = css({
  ...common,
  my: 4,
  listStyleType: "decimal",
  paddingInlineStart: 4,
});

export const img = css({
  my: 4,
  maxWidth: "100%",
  rounded: "xl",
});

export const pre = cx(
  css({ colorPalette: "primary" }),
  paper({
    my: 8,
    overflowX: "auto",
    maxWidth: "100%",
  }),
);

export const code = css({
  ":not(pre) > &": {
    color: { base: "secondary.800", _dark: "secondary.400" },
    bgct: "secondary.600/92",
    px: 1,
    rounded: "md",
  },
});

export const iframe = css({
  maxWidth: "100%",
});

export const rehypeClassNamesOptions = {
  h1: heading1,
  h2: heading2,
  h3: heading3,
  h4: heading4,
  h5: heading5,
  p: paragraph,
  a: anchor,
  blockquote,
  table,
  thead,
  tr,
  th,
  td,
  hr,
  ul: unorderedList,
  ol: orderedList,
  img,
  pre,
  code,
  iframe,
};
