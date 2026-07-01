# 🤝 Promises Chuqurlashtirilgan Tahlili

Bir vaqtning o'zida bir nechta asinxron amallarni boshqarish:

| Metod | Natija berish sharti | Qachon rad etiladi (Reject)? |
| :--- | :--- | :--- |
| `Promise.all` | BARCHA promise'lar bajarilganda | BITTA promise xato bersa darhol |
| `Promise.allSettled` | BARCHASI tugagach (xato bo'lsa ham holati bilan) | Hech qachon rad etilmaydi |
| `Promise.race` | Eng birinchi tugagan (muvaffaqiyat yoki xato) | Birinchi tugagan xato bo'lsa |
| `Promise.any` | Eng birinchi muvaffaqiyatli tugagan | BARCHA promise'lar xato bersa |
