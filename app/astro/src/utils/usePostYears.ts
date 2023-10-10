import { type CollectionEntry } from "astro:content";

function isNumber(value: any): value is number {
  return value && typeof value === "number";
}

function usePostsYears(
  allPosts: CollectionEntry<"posts">[],
  { sort }: { sort: "asc" | "desc" } = { sort: "desc" },
) {
  const years = [
    ...new Set(
      allPosts
        .map(({ data }) => new Date(data.date).getFullYear())
        .filter(isNumber),
    ),
  ].sort((a, b) => (sort === "desc" ? -1 : 1) * (a - b));
  return years;
}

export default usePostsYears;
