const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

export type PandaPalette =
  | "rose"
  | "pink"
  | "fuchsia"
  | "purple"
  | "violet"
  | "indigo"
  | "blue"
  | "sky"
  | "cyan"
  | "teal"
  | "emerald"
  | "green"
  | "lime"
  | "yellow"
  | "amber"
  | "orange"
  | "red"
  | "neutral"
  | "stone"
  | "zinc"
  | "gray"
  | "slate";

export type SarkaraPaletteOptions = {
  primary: PandaPalette;
  secondary: PandaPalette;
} & Record<string, PandaPalette>;

export function definePalette(props: SarkaraPaletteOptions) {
  return Object.entries(props).reduce<{
    [key: string]: {
      [key: string]: { value: string };
    };
  }>(
    (accum, [key, color]) => ({
      ...accum,
      [key]: shades.reduce<{
        [key: string]: { value: string };
      }>(
        (previousValue, curr) => ({
          ...previousValue,
          [curr]: { value: `{colors.${color}.${curr}}` },
        }),
        {},
      ),
    }),
    {},
  );
}
