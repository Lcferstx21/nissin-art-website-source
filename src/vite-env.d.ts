/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_PUBLIC_PATH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
