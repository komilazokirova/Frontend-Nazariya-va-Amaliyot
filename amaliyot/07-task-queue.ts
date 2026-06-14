export class AsyncQueue {
  private running = 0;
  private queue: (() => Promise<void>)[] = [];

  constructor(private concurrency: number = 2) {}

  add<T>(task: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.queue.push(async () => {
        try {
          const res = await task();
          resolve(res);
        } catch (err) {
          reject(err);
        }
      });
      this.runNext();
    });
  }

  private async runNext() {
    if (this.running >= this.concurrency || this.queue.length === 0) return;
    this.running++;
    const nextTask = this.queue.shift()!;
    try {
      await nextTask();
    } finally {
      this.running--;
      this.runNext();
    }
  }
}
