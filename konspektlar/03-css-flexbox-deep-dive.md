# 📐 CSS Flexbox Chuqurlashtirilgan Arxitekturasi

Flexbox bir o'lchamli (1D: qator yoki ustun) elementlarni tekislash va bo'sh joylarni taqsimlash uchun mo'ljallangan.

## Asosiy o'qlar:
* **Main Axis (Asosiy o'q)**: `flex-direction: row` bo'lsa gorizontal, `column` bo'lsa vertikal.
* **Cross Axis (Ko'ndalang o'q)**: Asosiy o'qqa perpendikulyar yo'nalish.

## Kalit xususiyatlar:
* `justify-content`: Asosiy o'q bo'ylab elementlarni tekislash (`flex-start`, `center`, `space-between`, `space-around`, `space-evenly`).
* `align-items`: Ko'ndalang o'q bo'ylab barcha elementlarni tekislash (`stretch`, `center`, `flex-start`, `flex-end`, `baseline`).
* `flex: flex-grow flex-shrink flex-basis`:
