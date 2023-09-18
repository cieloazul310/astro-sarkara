import { definePreset } from "@pandacss/dev";
import { definePalette, type PandaPalette } from "./definePalette";

export function defineSarkaraPreset(props: Record<string, PandaPalette>) {
  return definePreset({
    theme: {
      extend: {
        semanticTokens: {
          colors: {
            ...definePalette(props),
          },
        },
      },
    },
  });
}

export { definePalette, type PandaPalette };
