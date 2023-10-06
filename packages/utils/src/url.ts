export function isInternal(href: string | URL | undefined | null) {
  if (!href) return false;
  return /^\/(?!\/)/.test(href.toString());
}

export function withBaseUrl(path: string | URL | undefined | null) {
  const baseUrl = import.meta.env.BASE_URL;
  if (!path) return baseUrl;
  if (baseUrl === "/") return path;

  /** check if path already has baseUrl */
  if (path.toString().indexOf(baseUrl) === 0) return path;

  return `${baseUrl}${path}`;
}

export function withSiteUrl(path: string | URL | undefined | null) {
  const site = import.meta.env.SITE;
  if (!path || !site) return undefined;
  try {
    const url = new URL(path, site);
    return url;
  } catch (err) {
    console.error(err);
    return undefined;
  }
}

export function useAbsoluteUrl(path: string | URL | undefined | null) {
  const site = import.meta.env.SITE;
  if (!site) return undefined;
  if (!path) return undefined;

  const relativePath = withBaseUrl(path);
  const absoluteUrl = withSiteUrl(relativePath);
  return absoluteUrl;
}

export function useLink(
  href: string | URL | undefined | null,
  options: { disablePrefix?: boolean } = { disablePrefix: false },
): {
  href: string | URL | null;
  target?: "_blank";
  rel?: "noreferrer noopener";
} {
  if (!href) return { href: null };
  const internal = isInternal(href);

  if (!internal) return { href, target: "_blank", rel: "noreferrer noopener" };

  const baseUrl = import.meta.env.BASE_URL;
  if (baseUrl === "/") return { href };
  if (options?.disablePrefix) return { href };

  return { href: withBaseUrl(href) };
}
