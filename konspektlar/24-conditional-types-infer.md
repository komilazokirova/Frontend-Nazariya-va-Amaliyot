# 🧩 Conditional Types va `infer` Mexanizmi

Turlarni shartli ifodalar orqali hisoblash (`T extends U ? X : Y`).

## `infer` orqali tur ichidan boshqa turni ajratib olish:
```typescript
type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;

type MyFunc = (a: number) => string;
type Result = ReturnTypeOf<MyFunc>; // string
```
