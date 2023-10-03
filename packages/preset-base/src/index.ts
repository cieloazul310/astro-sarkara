import { definePreset } from "@pandacss/dev";
import globalCss from "./globalCss";
import layerStyles from "./layerStyles";
import semanticTokens from "./semanticTokens";
import textStyles from "./textStyles";
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
      textStyles,
      tokens,
      semanticTokens,
    },
  },
  utilities,
});

export default sarkaraPresetBase;
