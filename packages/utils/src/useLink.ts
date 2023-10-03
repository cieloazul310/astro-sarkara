export function isInternal(href: string | URL | undefined | null) {
  if (!href) return false;
  return /^\/(?!\/)/.test(href.toString());
}

export function useLink(
  href: string | URL | undefined | null,
  options: { disablePrefix?: boolean } = { disablePrefix: false },
): {
  href: string | URL | null;
  target?: "_blank";
  rel?: "noreferrer noopener";
} {
  const baseUrl = import.meta.env.BASE_URL;

  if (!href) return { href: null };
  const internal = isInternal(href);

  if (!internal) return { href, target: "_blank", rel: "noreferrer noopener" };

  if (baseUrl === "/") return { href };
  if (options?.disablePrefix) return { href };

  return { href: `${baseUrl}${href}` };
}
