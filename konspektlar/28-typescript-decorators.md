# 🎀 TypeScript Decorators (TC39 Stage 3)

Dekoratorlar — klasslar, metodlar va maydonlarning harakatini o'zgartirish va meta-ma'lumot qo'shish imkonini beruvchi funksiyalardir.

```typescript
function logged(target: any, context: ClassMethodDecoratorContext) {
  return function (this: any, ...args: any[]) {
    console.log(`[Log] ${String(context.name)} chaqirildi, argumentlar:`, args);
    return target.call(this, ...args);
  };
}
```
