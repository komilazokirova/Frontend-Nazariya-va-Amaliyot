# 🛡️ Discriminated Unions va Exhaustive Pattern Matching

Bitta umumiy maydon (discriminant) orqali turlarni ajratish:

```typescript
type NetworkState =
  | { state: "loading" }
  | { state: "success"; response: { title: string } }
  | { state: "failed"; code: number };

function handleState(state: NetworkState) {
  switch (state.state) {
    case "loading": return "Yuklanmoqda...";
    case "success": return state.response.title;
    case "failed": return `Xato kodi: ${state.code}`;
    default: {
      const _exhaustiveCheck: never = state;
      return _exhaustiveCheck;
    }
  }
