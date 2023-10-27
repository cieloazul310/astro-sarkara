import { defineSemanticTokens } from "@pandacss/dev";

export default defineSemanticTokens({
  colors: {
    bg: {
      DEFAULT: { value: "white" },
      dark: { value: "{colors.neutral.900}" },
    },
  },
  spacing: {
    xs: { value: "{spacing.1}" },
    sm: { value: "{spacing.2}" },
    md: { value: "{spacing.4}" },
    lg: { value: "{spacing.8}" },
    xl: { value: "{spacing.16} " },
  },
});
