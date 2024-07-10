/* eslint import/prefer-default-export: off */
import { defineUtility } from "@pandacss/dev";

/**
 * @deprecated
 * migrate to Color opacity modifier
 * https://panda-css.com/docs/concepts/color-opacity-modifier
 * https://play.panda-css.com/huZH-3NCkd
 */
export const backgroundColorTransparentize = defineUtility({
  shorthand: ["bgct", "bgt"],
  property: "backgroundColor",
  className: "transparentize_bgc",
  values: { type: "string" },
  deprecated: true,
  transform: (value: string, { token }) => {
    const lastIndex = value?.lastIndexOf("/");
    if (!lastIndex) {
      return {};
    }
    if (typeof value?.substring !== "function") {
      return {};
    }
    const color = value?.substring(0, lastIndex);
    if (!color) {
      return {};
    }
    const amount = value.split("/").at(-1);
    const colorValue = token(`colors.${color}`);

    const tokenOpacity = token(`opacity.${amount}`);
    const amountValue = tokenOpacity
      ? parseFloat(tokenOpacity) * 100
      : `${amount}%`;
    return {
      backgroundColor: `color-mix(in srgb, transparent ${amountValue}, ${colorValue})`,
    };
  },
});

export default { backgroundColorTransparentize };
