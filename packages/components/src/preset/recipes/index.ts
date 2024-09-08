import { defineRecipe } from "@pandacss/dev";

export const heading = defineRecipe({
  description: "Heading component for article.",
  className: "heading",
  base: {
    textStyle: "headings",
    _first: {
      mt: 0,
    },
    _last: {
      mb: 0,
    },
  },
  variants: {
    as: {
      h1: {
        fontSize: ["xl", "2xl", "4xl"],
        mt: 8,
        mb: 6,
      },
      h2: {
        fontSize: ["xl", "2xl", "3xl"],
        mt: 8,
        mb: 4,
      },
      h3: {
        fontSize: ["lg", "lg", "2xl"],
        mt: 8,
        mb: 4,
      },
      h4: {
        fontSize: ["md", "lg", "xl"],
        mt: 8,
        mb: 4,
        fontWeight: "bolder",
      },
      h5: {
        fontSize: ["md", "md", "lg"],
        mt: 4,
        mb: 2,
        fontWeight: "bolder",
      },
      h6: {
        fontSize: "md",
        mt: 4,
        mb: 2,
        fontWeight: "medium",
      },
    },
  },
  defaultVariants: {
    as: "h2",
  },
});

export const buttonBase = defineRecipe({
  className: "buttonBase",
  base: {
    rounded: "md",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    shadow: "sm",
    cursor: "pointer",
  },
  variants: {
    visual: {
      solid: {
        bg: { base: "colorPalette.600", _hover: "colorPalette.700" },
        color: "white",
        _dark: { bg: { base: "colorPalette.700", _hover: "colorPalette.600" } },
      },
      outline: {
        borderWidth: "1px",
        borderColor: { base: "colorPalette.700", _dark: "colorPalette.200" },
        color: { base: "colorPalette.700", _dark: "colorPalette.200" },
        _hover: {
          color: { base: "colorPalette.500", _dark: "colorPalette.50" },
        },
      },
    },
    size: {
      sm: { fontSize: "xs", gap: 1 },
      md: { fontSize: "md", gap: 1 },
      lg: { fontSize: "xl", gap: 1 },
      xl: { fontSize: "4xl", gap: 2 },
    },
  },
  defaultVariants: {
    visual: "solid",
    size: "md",
  },
});

export const paginationButton = defineRecipe({
  className: "pagination-button",
  base: {
    fontSize: ["sm", "md"],
  },
  variants: {
    display: {
      base: {},
      optional: {
        hideBelow: "sm",
      },
    },
  },
  defaultVariants: {
    display: "optional",
  },
});

export const navigationHgroup = defineRecipe({
  className: "navigation-hgroup",
  base: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  variants: {
    type: {
      left: {
        alignItems: "start",
      },
      right: {
        alignItems: "end",
      },
    },
  },
  defaultVariants: {
    type: "left",
  },
});

export default { heading, buttonBase, paginationButton, navigationHgroup };
