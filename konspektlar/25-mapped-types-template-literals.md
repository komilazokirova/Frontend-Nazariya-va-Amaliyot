# 🗺️ Mapped Types va Template Literal Types

Mavjud turlarning barcha kalitlari bo'ylab aylanib chiqish va yangi turlar yasash:

```typescript
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
