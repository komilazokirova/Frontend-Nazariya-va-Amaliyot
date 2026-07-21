# 🔍 Type Narrowing va Custom Type Guards

TypeScriptda noaniq turni (`unknown` yoki Union) aniq turga toraytirish usullari:

1. `typeof x === "string"`
2. `x instanceof Date`
3. `"error" in response`
4. **User-Defined Type Guard (`is`)**:
```typescript
function isString(val: unknown): val is string {
  return typeof val === "string";
}
