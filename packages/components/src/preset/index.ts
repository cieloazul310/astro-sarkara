import { definePreset } from "@pandacss/dev";
import { patterns } from "./patterns";
import { recipes } from "./recipes";
import { slotRecipes } from "./slot-recipes";

export const sarkaraComponentsPreset = definePreset({
  name: "sarkara-components",
  patterns,
  theme: {
    extend: {
      recipes,
      slotRecipes,
    },
  },
});

export default sarkaraComponentsPreset;
