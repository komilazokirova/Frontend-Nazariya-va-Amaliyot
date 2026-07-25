# 🎀 TypeScript Decorators (TC39 Stage 3)

Dekoratorlar — klasslar, metodlar va maydonlarning harakatini o'zgartirish va meta-ma'lumot qo'shish imkonini beruvchi funksiyalardir.

```typescript
function logged(target: any, context: ClassMethodDecoratorContext) {
