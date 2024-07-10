import { defineSemanticTokens } from "@pandacss/dev";

export default defineSemanticTokens({
  colors: {
    bg: {
      DEFAULT: { value: { base: "white", _dark: "{colors.neutral.900}" } },
      dark: { deprecated: true, value: "{colors.neutral.900}" },
    },
    fg: {
      value: { base: "{colors.neutral.950}", _dark: "{colors.neutral.50}" },
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
