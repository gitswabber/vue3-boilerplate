/// <reference types="vite/client" />
// todo check
interface ImportMetaEnv {
  readonly VITE_APP_TITLE?: string;
  // more env variables...
  VITE_MESSAGE?: string;
  VITE_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
