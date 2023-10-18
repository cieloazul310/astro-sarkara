import { defineSiteMetadata, defineMenu } from "@cieloazul310/astro-sarkara";

export const siteMetadata = defineSiteMetadata({
  title: "Astro Sarkara",
  description: "Astro components library built with Panda CSS.",
  image: "/ogimage.jpeg",
});

export const menu = defineMenu([
  { title: "Top", href: "/" },
  { title: "Tutorial", href: "/tutorial" },
  {
    title: "Link",
    items: [
      { title: "Astro", href: "https://astro.build/" },
      { title: "Panda CSS", href: "https://panda-css.com/" },
      {
        title: "GitHub Repo",
        href: "https://github.com/cieloazul310/astro-sarkara",
      },
    ],
  },
]);

export const pageSize = 25;
