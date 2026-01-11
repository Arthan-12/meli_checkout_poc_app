/// <reference types="vite/types/importMeta.d.ts" />
interface ImportMetaEnv {
  readonly VITE_BASE_URL: 'http://localhost:8080';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
