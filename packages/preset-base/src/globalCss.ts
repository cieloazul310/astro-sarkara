import { defineGlobalStyles } from "@pandacss/dev";

const body = {
  backgroundColor: { base: "bg", _dark: "bg.dark" },
  color: { base: "neutral.950", _dark: "neutral.50" },
  "&[data-drawer-open=true]": {
    overflowY: "hidden",
  },
};
const astroCode = {
  p: 4,
  my: 4,
  rounded: "xl",
};

export default defineGlobalStyles({
  ":root": {
    "--global-font-body": "token(fonts.body)",
  },
  body,
  ".astro-code": astroCode,
});
