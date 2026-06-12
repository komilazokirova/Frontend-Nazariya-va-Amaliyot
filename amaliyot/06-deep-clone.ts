export function deepClone<T>(obj: T, hash = new WeakMap()): T {
  if (Object(obj) !== obj) return obj;
  if (hash.has(obj as any)) return hash.get(obj as any);

  if (obj instanceof Date) return new Date(obj.getTime()) as any;
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags) as any;

  const result: any = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
