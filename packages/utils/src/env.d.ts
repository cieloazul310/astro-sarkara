interface ImportMetaEnv {
  readonly BASE_URL: string;
  readonly SITE: string | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
