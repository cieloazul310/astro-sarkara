/* eslint-disable-next-line import/no-unresolved */
import { type CollectionEntry } from "astro:content";
import type { MicrocmsBlogs } from "../types";

export function pubDateToYYMM(publishedAt: string) {
  const pubDate = new Date(publishedAt);
  const year = pubDate.getFullYear().toString();
  const month = (pubDate.getMonth() + 1).toString().padStart(2, "0");
  return { year, month };
}

function isMicrocmsBlogs(
  obj: unknown,
  type: "microcms" | "tutorial",
): obj is Pick<MicrocmsBlogs, "id" | "publishedAt"> {
  return type === "microcms";
}

export function slugify<T extends "microcms" | "tutorial">(
  type: T,
  obj: T extends "microcms"
    ? Pick<MicrocmsBlogs, "id" | "publishedAt">
    : CollectionEntry<"tutorial">,
  disablePrefix: boolean = false,
) {
  if (isMicrocmsBlogs(obj, type)) {
    const { year, month } = pubDateToYYMM(obj.publishedAt);
    const slug = `${encodeURIComponent(year)}/${encodeURIComponent(
      month,
    )}/${encodeURIComponent(obj.id)}`;
    if (disablePrefix) return slug;
    return `/microcms/${slug}`;
  }
  if (disablePrefix) return obj.id;
  return `/tutorial/${obj.id}`;
}
