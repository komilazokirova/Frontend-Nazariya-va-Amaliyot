# 🔁 Async/Await, Generator Funksiyalar va Iteratorlar

Iterator protokoli — har qanday ma'lumot tuzilmasini `for..of` siklida aylanib chiqish imkonini beruvchi `next()` metodidir.

## Generator funksiyalar (`function*`):
Bajarilishini to'xtatib (`yield`) va keyinroq davom ettirish mumkin bo'lgan maxsus funksiyalar:

```javascript
function* numberSequence() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = numberSequence();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
