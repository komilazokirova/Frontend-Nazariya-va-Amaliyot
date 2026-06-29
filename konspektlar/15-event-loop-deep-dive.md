# 🔄 JavaScript Event Loop: Microtasks va Macrotasks

JavaScript bir oqimli (single-threaded) til bo'lib, asinxronlikni Event Loop orqali boshqaradi.

## Navbatlar (Queues):
1. **Call Stack**: Hozir bajarilayotgan sinxron kod.
2. **Microtask Queue**: `Promise.then`, `queueMicrotask`, `MutationObserver`.
3. **Animation Frames**: `requestAnimationFrame`.
4. **Macrotask Queue**: `setTimeout`, `setInterval`, I/O, UI render hodisalari.
