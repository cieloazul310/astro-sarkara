import { defineSlotRecipe } from "@pandacss/dev";

export const button = defineSlotRecipe({
  className: "button",
  slots: ["button", "icon"],
  base: {
    button: {
      width: "fit-content",
      py: 2,
      px: "0.8em",
    },
    icon: {
      width: "1.2em",
      height: "1.2em",
    },
  },
  variants: {
    iconPlace: {
      start: {
        button: {
          flexDirection: "row",
        },
        icon: {
          ml: "-0.4em",
        },
      },
      end: {
        button: {
          flexDirection: "row-reverse",
        },
        icon: {
          mr: "-0.4em",
        },
      },
    },
  },
  defaultVariants: {
    iconPlace: "start",
  },
});

export const iconButton = defineSlotRecipe({
  className: "icon-button",
  slots: ["button", "icon"],
  base: {},
  variants: {
    shape: {
      square: { button: { rounded: "md" } },
      circle: { button: { rounded: "full" } },
    },
    size: {
      sm: { button: { width: 10, height: 10 }, icon: { width: 6, height: 6 } },
      md: { button: { width: 14, height: 14 }, icon: { width: 8, height: 8 } },
      lg: {
        button: { width: 16, height: 16 },
        icon: { width: 10, height: 10 },
      },
      xl: {
        button: { width: 20, height: 20 },
        icon: { width: 14, height: 14 },
      },
    },
  },
  defaultVariants: {
    size: "md",
    shape: "square",
  },
});

export const navigation = defineSlotRecipe({
  className: "navigation",
  slots: ["container", "button", "title"],
  base: {
    container: {
      width: "100%",
      display: "flex",
      gap: 2,
      colorPalette: "primary",
      flexDirection: ["column", "row"],
    },
    button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: 2,
      width: ["100%", "50%"],
    },
    title: {
      textStyle: "headings",
    },
  },
  variants: {
    direction: {
      auto: {},
      row: {
        container: { flexDirection: "row" },
        button: { width: "50%" },
      },
      column: {
        container: { flexDirection: "column" },
        button: { width: "100%" },
      },
    },
  },
  defaultVariants: {
    direction: "auto",
  },
});

export default { button, iconButton, navigation };
