# ⚙️ WebAssembly (Wasm) va Web Workers

JavaScript asosiy oqimi (Main Thread) faqat bitta bo'lgani uchun og'ir matematik hisob-kitoblar UI ni muzlatib qo'yishi mumkin.

## Web Workers:
* Alohida fondagi oqim (Background Thread) da ishlaydi.
* DOM bilan to'g'ridan-to'g'ri aloqa qilolmaydi, faqat `postMessage` va `onmessage` orqali xabar almashadi.
* `SharedArrayBuffer` orqali xotirani nusxalamasdan umumiy ishlatish mumkin.

## WebAssembly (Wasm):
* C++, Rust yoki Go tillarida yozilgan kodlarni brauzerda deyarli mashina tezligida (near-native speed) ishlatish imkonini beradi.
* Video montaj, 3D render, AI modellari va audio qayta ishlashda qo'llaniladi.
