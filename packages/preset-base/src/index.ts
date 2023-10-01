import { definePreset } from "@pandacss/dev";
import layerStyles from "./layerStyles";
import utilities from "./utilities";

const sarkaraPresetBase = definePreset({
  theme: {
    extend: {
      layerStyles,
    },
  },
  utilities,
});

export default sarkaraPresetBase;
