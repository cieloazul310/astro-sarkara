import { defineTokens } from "@pandacss/dev";

export default defineTokens({
  sizes: {
    headerHeight: { value: "56px" },
    contentMaxWidth: { value: "1280px" },
    sidebarWidth: { value: "320px" },
  },
  zIndex: {
    docked: { value: 7 },
    fab: { value: 100 },
    drawer: { value: 200 },
    drawerBackdrop: { value: 199 },
    header: { value: 10 },
  },
});
