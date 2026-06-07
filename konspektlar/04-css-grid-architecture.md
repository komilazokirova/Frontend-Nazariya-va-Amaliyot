# 🏁 CSS Grid: Subgrid, Template Areas va Responsive Tizimlar

CSS Grid — ikki o'lchamli (2D: bir vaqtning o'zida ham qator, ham ustun) tartib tizimi.

## 1. Responsive ustunlar:
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
```

## 2. Auto-fill vs Auto-fit:
* `auto-fill`: Ekran kengligi bo'sh bo'lsa ham bo'sh ustunlarni saqlab qoladi.
* `auto-fit`: Elementlar bo'sh joyni to'liq qoplab olishi uchun bo'sh ustunlarni yopadi (`stretch`).
