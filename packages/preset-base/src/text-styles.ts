import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
  headings: {
    description: "Text style for heading.",
    value: {
      fontWeight: "bold",
      wordBreak: "auto-phrase",
      overflowWrap: "anywhere",
      textWrap: "auto",
    },
  },
});
