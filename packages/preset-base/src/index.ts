import { definePreset } from "@pandacss/dev";
import globalCss from "./globalCss";
import layerStyles from "./layerStyles";
import semanticTokens from "./semanticTokens";
import textStyles from "./textStyles";
import tokens from "./tokens";
import utilities from "./utilities";

const sarkaraPresetBase = definePreset({
  name: "sarkara-preset-base",
  globalCss,
  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
    drawerOpen: "[data-drawer-open=true] &",
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
