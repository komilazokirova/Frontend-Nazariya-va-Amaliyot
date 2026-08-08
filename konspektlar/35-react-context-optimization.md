# 🌐 React Context API va Re-render Muammosi

Context global holatni chuqur komponentlarga uzatish (Prop Drilling oldini olish) uchun juda qulay, lekin katta kamchiligi bor:

> **Diqqat**: Contextdagi bitta kichik qiymat o'zgarsa ham, ushbu Contextga obuna bo'lgan **BARCHA** komponentlar qayta render bo'ladi!

## Yechimlar:
1. Contextni kichik, mustaqil qismlarga bo'lish (`ThemeContext`, `AuthContext`, `CartContext`).
