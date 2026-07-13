# 🧬 TypeScript Generics: Moslashuvchan va Xavfsiz Kod

Generics — funksiya yoki klasslarni bir nechta turli xil ma'lumot turlari bilan xavfsiz ishlash imkonini beruvchi shablon tizimi.

```typescript
function getFirstElement<T>(array: T[]): T | undefined {
  return array[0];
}

// Constraints (Cheklovlar):
interface HasId {
  id: string | number;
