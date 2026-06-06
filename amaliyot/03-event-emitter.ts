type EventCallback<T = any> = (payload: T) => void;

export class TypedEventEmitter<Events extends Record<string, any>> {
  private listeners: { [K in keyof Events]?: EventCallback<Events[K]>[] } = {};

  on<K extends keyof Events>(event: K, callback: EventCallback<Events[K]>): () => void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event]!.push(callback);
    return () => this.off(event, callback);
  }

  off<K extends keyof Events>(event: K, callback: EventCallback<Events[K]>): void {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event]!.filter(cb => cb !== callback);
  }

  emit<K extends keyof Events>(event: K, payload: Events[K]): void {
    this.listeners[event]?.forEach(cb => cb(payload));
  }
}
