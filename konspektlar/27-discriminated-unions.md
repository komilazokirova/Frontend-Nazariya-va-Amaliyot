# 🛡️ Discriminated Unions va Exhaustive Pattern Matching

Bitta umumiy maydon (discriminant) orqali turlarni ajratish:

```typescript
type NetworkState =
  | { state: "loading" }
  | { state: "success"; response: { title: string } }
  | { state: "failed"; code: number };

