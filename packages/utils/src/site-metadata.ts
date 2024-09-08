export type SiteMetadata = {
  title: string;
  description: string;
  image?: string;
  favicon?: string;
};

export function defineSiteMetadata(siteMetadata: SiteMetadata) {
  return siteMetadata;
}
