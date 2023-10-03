export type Menu<T extends object = Record<string, unknown>> = (
  | MenuItem<T>
  | MenuGroup<T>
)[];
export type MenuItem<T extends object = Record<string, unknown>> = {
  title: string;
  href: string;
} & Partial<T>;
export type MenuGroup<T extends object = Record<string, unknown>> = {
  title: string;
  items: MenuItem<T>[];
};

export function isMenuItem<T extends object = Record<string, unknown>>(
  item: MenuItem<T> | MenuGroup<T>,
): item is MenuItem<T> {
  return Object.prototype.hasOwnProperty.call(item, "href");
}

export function defineMenu<T extends object = Record<string, unknown>>(
  menu: Menu<T>,
): Menu<T> {
  return menu;
}
