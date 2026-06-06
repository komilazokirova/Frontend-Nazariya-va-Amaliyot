type EventCallback<T = any> = (payload: T) => void;

export class TypedEventEmitter<Events extends Record<string, any>> {
  private listeners: { [K in keyof Events]?: EventCallback<Events[K]>[] } = {};

  on<K extends keyof Events>(event: K, callback: EventCallback<Events[K]>): () => void {
