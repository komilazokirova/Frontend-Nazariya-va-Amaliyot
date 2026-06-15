# 🏎️ Critical Rendering Path (CRP), Reflow va Repaint

Brauzer HTML va CSS dan foydalanuvchi ko'radigan piksellargacha bo'lgan yo'li:

1. **DOM (Document Object Model)** qurilishi.
2. **CSSOM (CSS Object Model)** qurilishi.
3. **Render Tree** (DOM + CSSOM faqat ko'rinadigan qismlari).
4. **Layout**: Har bir tugunning aniq koordinatasi va o'lchami hisoblanadi.
5. **Paint**: Piksellar xotiraga chiziladi.
6. **Compositing**: Qatlamlar GPU orqali ekranga chiqariladi.

### Reflow keltirib chiqaruvchi amallar:
* `offsetWidth`, `clientHeight`, `getBoundingClientRect()` o'qish.
* DOM elementlarini qo'shish yoki o'chirish.
* Shriftslarni o'zgartirish.
