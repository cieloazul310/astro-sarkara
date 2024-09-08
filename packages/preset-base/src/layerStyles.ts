import { defineLayerStyles } from "@pandacss/dev";

const layerStyles = defineLayerStyles({
  paper: {
    description: "Sarkara basic paper style with translucent background color.",
    value: {
      // @ts-expect-error
      bg: { base: "colorPalette.600/8", _dark: "colorPalette.600/12" },
      // @ts-expect-error
      rounded: "xl",
    },
  },
});

export default layerStyles;
