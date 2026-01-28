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
      fontSize: { base: "xl", md: "2xl", lg: "4xl" },
      mt: "calc({spacing.md} + {spacing.lg})",
      mb: "calc({spacing.sm} + {spacing.md})",
    },
    h2: {
      ...common,
      textStyle: "headings",
      fontSize: { base: "xl", md: "2xl", lg: "3xl" },
      mt: { base: "calc({spacing.sm} + {spacing.lg})", md: "xl" },
      mb: "calc({spacing.sm} + {spacing.md})",
    },
    h3: {
      ...common,
      textStyle: "headings",
      fontSize: { base: "lg", md: "lg", lg: "2xl" },
      mt: { base: "lg", md: "calc({spacing.md} + {spacing.lg})" },
      mb: { base: "md", md: "calc({spacing.sm} + {spacing.md})" },
    },
    h4: {
      ...common,
      textStyle: "headings",
      fontSize: { base: "md", md: "lg", lg: "xl" },
      mt: {
        base: "calc({spacing.sm} + {spacing.md})",
        md: "calc({spacing.sm} + {spacing.lg})",
      },
      mb: "md",
    },
    h5: {
      ...common,
      textStyle: "headings",
      fontSize: { base: "md", lg: "lg" },
      mt: "md",
    },
    p: {
      ...common,
      fontSize: { base: "md", md: "lg" },
      lineHeight: "1.7",
      my: "md",
      mb: { md: "calc({spacing.sm} + {spacing.md})" },
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
      fontSize: { base: "md", md: "lg" },
      "li > &": {
        my: "sm",
      },
    },
    ol: {
      ...common,
      my: "md",
      listStyleType: "decimal",
      paddingInlineStart: 4,
      fontSize: { base: "md", md: "lg" },
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
      fontSize: ["sm", "md", "lg"],
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
