# 🔒 Execution Context, Scope Chain va Closures

Closure (yopiq qamrov) — funksiya o'zi e'lon qilingan leksik muhitdagi o'zgaruvchilarni, hatto tashqi funksiya bajarilib bo'lganidan keyin ham eslab qolish qobiliyatidir.

```javascript
function createCounter() {
  let count = 0; // Private state
  return {
    increment: () => ++count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.getCount());  // 1
```

## Amaliy qo'llanilishi:
* Data Encapsulation (Private o'zgaruvchilar yaratish).
