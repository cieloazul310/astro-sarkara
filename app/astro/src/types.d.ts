export type MarkdownFrontmatter = {
  layout?: string;
  title?: string;
  date?: string;
  author?: string;
};

export type PostData = {
  title: string;
  date: Date;
  author?: string;
};

// 型定義
/**
 * コンテンツ(API)に自動付与される値
 * https://document.microcms.io/manual/automatic-grant-fields
 */
export type MicrocmsDefaultFields = {
  /** コンテンツの作成日時 */
  createdAt: string;
  /** コンテンツの更新日時 */
  updatedAt: string;
  /** コンテンツの公開日時 */
  publishedAt: string;
  /** コンテンツの改定日時 */
  revisedAt: string;
  /** コンテンツの表示順 (0が最上位) */
  sortIndex: number;
};
export type MicrocmsCategories = {
  id: string;
  name: string;
  categoriesId: string;
} & MicrocmsDefaultFields;

export type MicrocmsBlogsCategory = Pick<
  MicrocmsCategories,
  "id" | "createdAt" | "updatedAt" | "publishedAt" | "revisedAt" | "name"
>;

export type MicrocmsBlogsEyecatch = {
  url: string;
  height: number;
  width: number;
};
export type MicrocmsBlogs = {
  id: string;
  blogsId: string;
  title: string;
  content: string;
  eyecatch: MicrocmsBlogsEyecatch | null;
  category: MicrocmsBlogsCategory | null;
} & MicrocmsDefaultFields;
