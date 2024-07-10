import { defineLayerStyles } from "@pandacss/dev";

const layerStyles = defineLayerStyles({
  paper: {
    description: "Sarkara basic paper style with translucent background color.",
    value: {
      // @ts-expect-error
      bg: "colorPalette.600/8",
      // bgct: "colorPalette.600/92",
    },
  },
});

export default layerStyles;
