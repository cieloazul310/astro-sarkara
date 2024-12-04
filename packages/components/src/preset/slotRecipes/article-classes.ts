import type { SystemStyleObject } from "styled-system/types";
import { defineSlotRecipe } from "@pandacss/dev";

const common: SystemStyleObject = {
  _first: {
    mt: 0,
  },
  _last: {
    mb: 0,
  },
};

const paper: SystemStyleObject = {
  layerStyle: "paper",
  p: [4, 8],
  rounded: "xl",
  wordBreak: "break-all",
};

const articleClasses = defineSlotRecipe({
  className: "sarkara-article",
  slots: [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "p",
    "a",
    "blockquote",
    "table",
    "thead",
    "tr",
    "th",
    "td",
    "hr",
    "ul",
    "ol",
    "img",
    "pre",
    "code",
    "iframe",
  ],
  base: {
    h1: {
      ...common,
      textStyle: "headings",
      fontSize: ["xl", "2xl", "4xl"],
      mt: "calc(token(spacing.md) + token(spacing.lg))",
      mb: "calc(token(spacing.sm) + token(spacing.md))",
    },
    h2: {
      ...common,
      textStyle: "headings",
      fontSize: ["xl", "2xl", "3xl"],
      mt: "calc(token(spacing.md) + token(spacing.lg))",
      mb: "md",
    },
    h3: {
      ...common,
      textStyle: "headings",
      fontSize: ["lg", "lg", "2xl"],
      mt: "calc(token(spacing.md) + token(spacing.lg))",
      mb: "md",
    },
    h4: {
      ...common,
      fontSize: "md",
      my: "sm",
      overflowWrap: "break-word",
    },
    h5: {
      ...common,
      textStyle: "headings",
      fontSize: ["md", "md", "lg"],
      mt: "md",
      mb: "sm",
    },
    p: {
      ...common,
      fontSize: "md",
      my: "sm",
      overflowWrap: "break-word",
    },
    a: {
      color: {
        base: "primary.700",
        _hover: "primary.500",
        _active: "colorPalette.600",
      },
      textDecoration: { _hover: "underline" },
      _dark: {
        color: {
          base: "primary.300",
          _hover: "primary.200",
          _active: "colorPalette.500",
        },
      },
      _focusVisible: {
        bg: { base: "yellow.100", _dark: "yellow.900" },
      },
    },
    blockquote: {
      ...paper,
      my: "md",
    },
    ul: {
      ...common,
      my: "md",
      listStyleType: "disc",
      paddingInlineStart: 4,
      "li > &": {
        my: "sm",
      },
    },
    ol: {
      ...common,
      my: "md",
      listStyleType: "decimal",
      paddingInlineStart: 4,
      "li > &": {
        my: "sm",
      },
    },
    img: {
      my: "md",
      maxWidth: "100%",
      rounded: "xl",
    },
    code: {
      ":not(pre) > &": {
        color: { base: "secondary.800", _dark: "secondary.400" },
        bg: "secondary.600/8",
        px: 1,
        rounded: "md",
      },
    },
    hr: {
      color: { base: "primary.50", _dark: "primary.950" },
      my: "lg",
    },
    table: {
      ...paper,
      width: "100%",
      borderWidth: "1px",
      borderColor: { base: "primary.50", _dark: "primary.950" },
      my: "lg",
      fontSize: ["sm", "md"],
    },
    thead: {
      ...paper,
    },
    tr: {
      borderColor: { base: "primary.50", _dark: "primary.950" },
      borderBottomWidth: "1px",
      _last: {
        borderBottomWidth: 0,
      },
    },
    th: {
      p: "md",
    },
    td: {
      p: "md",
    },
    pre: {
      ...paper,
      my: "lg",
      overflowX: "auto",
      maxWidth: "full",
    },
    iframe: {
      my: "lg",
      maxWidth: "full",
    },
  },
});

export default articleClasses;
