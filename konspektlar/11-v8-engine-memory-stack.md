# ⚙️ JavaScript V8 Dvigateli: Call Stack va Memory Heap

Chrome va Node.js dagi Google V8 dvigatelining ichki arxitekturasi:

## Asosiy qismlar:
* **Memory Heap**: Obyektlar, massivlar va funksiyalar uchun dinamik xotira ajratish joyi.
* **Call Stack**: Sinxron kodlar bajariladigan chaqiruvlar steki (LIFO).
* **Ignition**: Tezkor JavaScript Interpreter (Baytkod hosil qiladi).
* **TurboFan**: Eng ko'p ishlatiladigan ("hot") funksiyalarni mashina kodiga kompilyatsiya qiluvchi JIT Compiler.

## Garbage Collection (GC):
* **Mark-and-Sweep algoritmi**: Ildizdan (Root/Window) borib bo'lmaydigan barcha obyektlarni aniqlab, xotiradan tozalaydi.
