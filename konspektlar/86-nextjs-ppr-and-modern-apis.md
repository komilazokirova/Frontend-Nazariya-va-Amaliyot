# 🚀 Next.js 15+ Yangiliklari va Partial Prerendering (PPR)

Next.js 15 dasturlash modeliga bir qator inqilobiy o'zgarishlarni olib kirdi.

## 1. Partial Prerendering (PPR):
Bitta sahifaning o'zida ham statik, ham dinamik qismlarni birlashtirish:
* Sahifaning statik qismi (navigatsiya, sarlavha, layout) darhol statik CDN orqali uzatiladi.
* Ichidagi dinamik komponentlar esa `<Suspense>` orqali serverda parallel hisoblanib, oqim (streaming) shaklida uzatiladi.

## 2. Asynchronous Request APIs:
`cookies()`, `headers()`, `params` va `searchParams` endi asinxron (`await cookies()`) bo'ldi. Bu serverga so'rovni erta optimizatsiya qilishga imkon beradi.

## 3. Server Actions Xavfsizligi:
Dead code elimination va maxsus shifrlangan action ID lar orqali kod xavfsizligini ta'minlash.
