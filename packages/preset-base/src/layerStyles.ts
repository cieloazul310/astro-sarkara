import { defineLayerStyles } from "@pandacss/dev";

const layerStyles = defineLayerStyles({
  paper: {
    description: "Sarkara basic paper style with translucent background color.",
    value: {
      // @ts-expect-error
      bgct: "colorPalette.600/92",
    },
  },
});

export default layerStyles;
