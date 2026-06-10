export interface RetryOptions {
  retries?: number;
  backoffMs?: number;
  retryOnStatus?: number[];
}

export async function fetchWithRetry(url: string, options: RequestInit = {}, retryOpts: RetryOptions = {}): Promise<Response> {
  const { retries = 3, backoffMs = 500, retryOnStatus = [408, 429, 500, 502, 503, 504] } = retryOpts;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, options);
