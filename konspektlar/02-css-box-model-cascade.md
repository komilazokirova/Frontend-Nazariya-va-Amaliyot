# 📦 CSS Box Model, Specificity va Cascade Mexanizmi

Har bir HTML elementi brauzer tomonidan to'rtburchak quti (box) sifatida render qilinadi.

## 1. Box Model qatlamlari:
* **Content**: Elementning asosiy matni yoki tasviri.
* **Padding**: Kontent va chegara (border) orasidagi ichki masofa.
* **Border**: Element chegarasi.
* **Margin**: Element va tashqi qo'shni elementlar orasidagi tashqi masofa.
* **`box-sizing: border-box`**: Kenglik (`width`) hisoblanganda padding va border'ni hisobga olish.

## 2. CSS Specificity (Vazn qoidalari):
| Selektor turi | Vazni | Misol |
| :--- | :--- | :--- |
| Inline styles | 1000 | `style="color: red"` |
