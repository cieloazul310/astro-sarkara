import { defineGlobalStyles } from "@pandacss/dev";

const body = {
  backgroundColor: { base: "bg", _dark: "bg.dark" },
  color: { base: "neutral.950", _dark: "neutral.50" },
  "&[data-drawer-open=true]": {
    overflowY: "hidden",
  },
};

export default defineGlobalStyles({
  body,
});
