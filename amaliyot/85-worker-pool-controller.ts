export class WorkerPool<TTask, TResult> {
  private workers: Worker[] = [];
  private taskQueue: Array<{
    task: TTask;
    resolve: (res: TResult) => void;
    reject: (err: any) => void;
  }> = [];
  private availableWorkers: Worker[] = [];

  constructor(workerScriptUrl: string, private poolSize: number = 4) {
    for (let i = 0; i < this.poolSize; i++) {
      const worker = new Worker(workerScriptUrl, { type: 'module' });
      this.workers.push(worker);
      this.availableWorkers.push(worker);
    }
  }

  public runTask(task: TTask): Promise<TResult> {
    return new Promise((resolve, reject) => {
      this.taskQueue.push({ task, resolve, reject });
      this.dispatchNext();
    });
  }

  private dispatchNext() {
    if (this.availableWorkers.length === 0 || this.taskQueue.length === 0) return;

