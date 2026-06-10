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
      if (response.ok || !retryOnStatus.includes(response.status) || attempt === retries) {
        return response;
      }
    } catch (error) {
      if (attempt === retries) throw error;
    }

    const wait = backoffMs * Math.pow(2, attempt);
    await new Promise(r => setTimeout(r, wait));
  }

  throw new Error('Maksimal urinishlar tugadi');
