import { definePreset } from "@pandacss/dev";
import { globalCss } from "./global-css";
import { layerStyles } from "./layer-styles";
import { semanticTokens } from "./semantic-tokens";
import { textStyles } from "./text-styles";
import { tokens } from "./tokens";
import { utilities } from "./utilities";

export const sarkaraPresetBase = definePreset({
  name: "sarkara-preset-base",
  globalCss,
  conditions: {
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
