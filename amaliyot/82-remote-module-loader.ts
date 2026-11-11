/**
 * Dynamic Remote Module Loader
 * Micro-frontend ilovalarda tashqi masofaviy skriptlarni xavfsiz yuklash
 */
export interface LoadRemoteOptions {
  url: string;
  scope: string;
  module: string;
  timeoutMs?: number;
}

export async function loadRemoteModule<T = any>(options: LoadRemoteOptions): Promise<T> {
  const { url, scope, module, timeoutMs = 8000 } = options;

