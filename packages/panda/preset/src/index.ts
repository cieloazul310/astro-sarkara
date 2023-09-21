import { definePreset } from "@pandacss/dev";
import defaultPreset from "@pandacss/dev/presets";
/*
import {
  layerStyles,
  backgroundColorTransparentize,
  gradientBox,
  paper,
} from "@cieloazul310/panda-style-sarkara";
*/
import { definePalette, type PandaPalette } from "./definePalette";

export function defineSarkaraPreset(props: Record<string, PandaPalette> = {}) {
  return definePreset({
    presets: [defaultPreset],
    theme: {
      extend: {
        // layerStyles,
        semanticTokens: {
          colors: {
            ...definePalette(props),
          },
        },
      },
    },
    /*
    patterns: {
      extend: {
        gradientBox,
        paper,
      },
    },
    utilities: {
      extend: {
        backgroundColorTransparentize,
      },
    },
    */
  });
}

export { definePalette, type PandaPalette };
