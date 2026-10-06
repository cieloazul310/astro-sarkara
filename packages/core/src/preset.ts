import {
  definePreset,
  defineConfig,
  type Preset,
  type Config,
} from "@pandacss/dev";
import sarkaraPresetBase from "@cieloazul310/panda-preset-sarkara-base";
/* eslint-disable-next-line import-x/no-unresolved */
import sarkaraComponentsPreset from "@cieloazul310/astro-sarkara-components/preset";
import {
  definePalette,
  type SarkaraPaletteOptions,
  type PandaPalette,
} from "./definePalette";

/**
 * @deprecated
 */
export type CreateSarkaraPresetOptions = Omit<Preset, "name"> & {
  palette: SarkaraPaletteOptions;
};

export function createSarkaraPreset({
  primaryColor = "blue",
  secondaryColor = "yellow",
}: {
  primaryColor: PandaPalette;
  secondaryColor: PandaPalette;
}) {
  return definePreset({
    name: "sarkara-preset",
    presets: [sarkaraPresetBase, sarkaraComponentsPreset],
    theme: {
      extend: {
        semanticTokens: {
          colors: {
            ...definePalette({
              primary: primaryColor,
              secondary: secondaryColor,
            }),
          },
        },
      },
    },
  });
}

/**
 * @deprecated
 */
export function defineSarkaraConfig({
  palette,
  ...options
}: CreateSarkaraPresetOptions & Config): Config {
  return defineConfig({
    ...options,
    preflight: true,
    presets: [
      "@pandacss/preset-base",
      "@pandacss/preset-panda",
      sarkaraPresetBase,
      sarkaraComponentsPreset,
      ...(options?.presets ?? []),
    ],
    theme: {
      ...options?.theme,
      extend: {
        ...options?.theme?.extend,
        semanticTokens: {
          ...options?.theme?.extend?.semanticTokens,
          colors: {
            ...definePalette(palette),
            ...options?.theme?.extend?.semanticTokens?.colors,
          },
        },
      },
    },
  });
}
