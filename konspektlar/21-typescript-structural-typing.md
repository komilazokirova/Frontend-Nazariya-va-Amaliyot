# 🔷 TypeScript: Structural vs Nominal Typing

TypeScript **Structural Typing (Duck Typing)** tizimidan foydalanadi: "Agar u o'rdakdek yursa va o'rdakdek qag'illasa, demak u o'rdakdir".

```typescript
type User = { id: string; name: string };
type Product = { id: string; name: string };

const p: Product = { id: "1", name: "Laptop" };
