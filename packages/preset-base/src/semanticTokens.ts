import { defineSemanticTokens } from "@pandacss/dev";

export default defineSemanticTokens({
  colors: {
    bg: {
      DEFAULT: { value: "white" },
      dark: { value: "{colors.neutral.900}" },
    },
  },
});
