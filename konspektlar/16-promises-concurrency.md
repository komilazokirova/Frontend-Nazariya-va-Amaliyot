# 🤝 Promises Chuqurlashtirilgan Tahlili

Bir vaqtning o'zida bir nechta asinxron amallarni boshqarish:

| Metod | Natija berish sharti | Qachon rad etiladi (Reject)? |
| :--- | :--- | :--- |
| `Promise.all` | BARCHA promise'lar bajarilganda | BITTA promise xato bersa darhol |
| `Promise.allSettled` | BARCHASI tugagach (xato bo'lsa ham holati bilan) | Hech qachon rad etilmaydi |
