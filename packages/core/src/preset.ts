import * as path from "path";
import {
  definePreset,
  defineConfig,
  type Preset,
  type Config,
} from "@pandacss/dev";
import sarkaraPresetBase from "@cieloazul310/panda-preset-sarkara-base";
import sarkaraComponentsPreset from "@cieloazul310/astro-sarkara-components/preset";
import { definePalette, type SarkaraPaletteOptions } from "./definePalette";

export const astroComponentsPaths = [
  "@cieloazul310/astro-sarkara-components",
  "@cieloazul310/astro-sarkara-layout",
  "@cieloazul310/astro-sarkara-article-classes",
].map((lib) =>
  path.resolve(
    path.dirname(require.resolve(lib)),
    "**/*.{js,ts,jsx,tsx,astro}",
  ),
);

export type CreateSarkaraPresetOptions = Omit<Preset, "name"> & {
  palette: SarkaraPaletteOptions;
};

export function createSarkaraPreset({
  palette,
  ...preset
}: CreateSarkaraPresetOptions) {
  return definePreset({
    name: "sarkara-preset",
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

export function defineSarkaraConfig({
  palette,
  ...options
}: CreateSarkaraPresetOptions & Config): Config {
  return defineConfig({
    ...options,
    preflight: true,
    presets: [
      "@pandacss/dev/presets",
      sarkaraPresetBase,
      sarkaraComponentsPreset,
      ...(options?.presets ?? []),
    ],
    include: [...astroComponentsPaths, ...(options?.include ?? [])],
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
