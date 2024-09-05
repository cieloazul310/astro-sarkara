import { definePreset } from "@pandacss/dev";
import patterns from "./patterns";
import recipes from "./recipes";
import slotRecipes from "./slotRecipes";

const sarkaraComponentsPreset = definePreset({
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
