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

    const remaining: QueuedAction[] = [];

    for (const action of queue) {
      try {
        await fetch(action.url, {
          method: action.method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(action.body),
        });
      } catch (err) {
        remaining.push(action);
      }
    }

    localStorage.setItem(this.queueKey, JSON.stringify(remaining));
  }

  private getQueue(): QueuedAction[] {
    try {
      const data = localStorage.getItem(this.queueKey);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }
}
