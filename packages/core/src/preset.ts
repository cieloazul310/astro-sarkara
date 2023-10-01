import * as path from "path";
import { definePreset, type Preset } from "@pandacss/dev";
import sarkaraPresetBase from "@cieloazul310/panda-preset-sarkara-base";
import sarkaraComponentsPreset from "@cieloazul310/astro-sarkara-components/preset";
import { definePalette, type SarkaraPaletteOptions } from "./definePalette";

export type CreateSarkaraPresetOptions = Preset & {
  palette: SarkaraPaletteOptions;
};

export function createSarkaraPreset({ palette, ...preset }: CreateSarkaraPresetOptions) {
  return definePreset({
    presets: [sarkaraPresetBase, sarkaraComponentsPreset],
    theme: {
      extend: {
        semanticTokens: {
          colors: {
            ...definePalette(palette),
          },
        },
      },
    },
    ...preset,
  });
}

export const astroComponentsPaths = ["@cieloazul310/astro-sarkara-components"].map(
  (components) =>
    path.resolve(path.dirname(require.resolve(components)), "*.astro"),
);
