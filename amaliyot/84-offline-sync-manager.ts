export interface QueuedAction {
  id: string;
  url: string;
  method: 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body: any;
  timestamp: number;
}

export class OfflineSyncManager {
  private queueKey = 'offline-actions-queue';

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('online', () => this.syncPendingActions());
    }
  }

  public async queueAction(action: Omit<QueuedAction, 'id' | 'timestamp'>): Promise<void> {
    const queue = this.getQueue();
    const newAction: QueuedAction = {
      ...action,
      id: crypto.randomUUID(),
      timestamp: Date.now(),
    };
    queue.push(newAction);
    localStorage.setItem(this.queueKey, JSON.stringify(queue));

    if (navigator.onLine) {
      await this.syncPendingActions();
    }
  }

  public async syncPendingActions(): Promise<void> {
    const queue = this.getQueue();
    if (queue.length === 0) return;

