import { definePreset } from "@pandacss/dev";
import patterns from "./patterns";
import recipes from "./recipes";
import slotRecipes from "./slotRecipes";

const sarkaraComponentsPreset = definePreset({
  patterns,
  theme: {
    extend: {
      recipes,
      slotRecipes,
    },
  },
});

export default sarkaraComponentsPreset;
