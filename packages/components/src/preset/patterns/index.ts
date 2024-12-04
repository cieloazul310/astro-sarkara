import { definePattern } from "@pandacss/dev";

export const gradientBox = definePattern({
  description: "props for short-hand bgGradient",
  transform(props) {
    return {
      color: "white",
      bgGradient: "to-r",
      gradientFrom: { base: "primary.600", _dark: "primary.800" },
      gradientTo: { base: "secondary.100", _dark: "bg" },
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
      bg: {
        base: "colorPalette.600/8",
        _dark: "colorPalette.600/10",
        _hover: hover ? "colorPalette.600/16" : undefined,
      },
      _selected: {
        bg: { base: "colorPalette.600/16", _dark: "colorPalette.600/16" },
        color: { base: "colorPalette.800", _dark: "colorPalette.300" },
        pointerEvents: "none",
      },
      "a&": {
        _active: {
          bg: { base: "colorPalette.600/20", _dark: "colorPalette.600/20" },
          color: { base: "colorPalette.800", _dark: "colorPalette.300" },
        },
      },
      p: [4, 8],
      rounded: "xl",
      wordBreak: "break-all",
      transition: "background .25s",
      ...props,
    };
  },
});

export default { gradientBox, paper };
