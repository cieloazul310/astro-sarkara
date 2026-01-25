import { defineGlobalStyles } from "@pandacss/dev";

const html = {
  fontSmoothing: "auto",
};

const body = {
  backgroundColor: "bg",
  color: "fg",
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
  html,
  body,
  ".astro-code": astroCode,
});
