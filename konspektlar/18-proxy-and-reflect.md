# 🔮 JavaScript Proxy va Reflect API

Proxy — obyekt ustidagi asosiy operatsiyalarni (o'qish, yozish, o'chirish) ushlab oluvchi (intercept) vosita. Vue 3 va MobX reaktivlik tizimi aynan Proxy ustiga qurilgan.

```javascript
const user = { name: "Komila", age: 24 };

const observedUser = new Proxy(user, {
  get(target, prop, receiver) {
    console.log(`Property o'qildi: ${String(prop)}`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    console.log(`Property yangilandi: ${String(prop)} = ${value}`);
    return Reflect.set(target, prop, value, receiver);
  }
