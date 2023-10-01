import { definePattern } from "@pandacss/dev";

export const gradientBox = definePattern({
  description: "props for short-hand bgGradient",
  transform(props) {
    return {
      color: "white",
      bgGradient: "to-r",
      gradientFrom: { base: "primary.600", _dark: "primary.800" },
      gradientTo: { base: "secondary.100", _dark: "bg.dark" },
      ...props,
    };
  },
});

export const paper = definePattern({
  description: "Paper component with background and border-radius",
  properties: {
    hover: { type: "boolean" },
  },
  transform({ hover, ...props }) {
    return {
      bgct: {
        base: "colorPalette.600/92",
        _dark: "colorPalette.600/90",
        _hover: hover ? "colorPalette.600/84" : undefined,
      },
      "&[data-selected]": {
        bgct: { base: "colorPalette.600/84", _dark: "colorPalette.600/84" },
        color: { base: "colorPalette.800", _dark: "colorPalette.300" },
        pointerEvents: "none",
      },
      p: [4, 8],
      rounded: "xl",
      transition: "background .25s",
      ...props,
    };
  },
});

export default { gradientBox, paper };
