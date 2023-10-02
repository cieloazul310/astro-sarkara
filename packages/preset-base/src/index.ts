import { definePreset } from "@pandacss/dev";
import globalCss from "./globalCss";
import layerStyles from "./layerStyles";
import semanticTokens from "./semanticTokens";
import tokens from "./tokens";
import utilities from "./utilities";

const sarkaraPresetBase = definePreset({
  globalCss,
  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
  },
  theme: {
    extend: {
      layerStyles,
      tokens,
      semanticTokens,
    },
  },
  utilities,
});

export default sarkaraPresetBase;
