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

  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(`Remote module yuklanishi vaqtida timeout bo'ldi: ${url}`));
    }, timeoutMs);

    const script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    script.async = true;

    script.onload = async () => {
      clearTimeout(timer);
      try {
        const container = (window as any)[scope];
