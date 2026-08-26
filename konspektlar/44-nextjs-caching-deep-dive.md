# 📦 Next.js 4 Bosqichli Kesh Tizimi

1. **Request Memoization**: Bitta render siklida bir xil `fetch` so'rovi bir necha bor takrorlansa, faqat 1 marta bajariladi.
2. **Data Cache**: So'rovlar natijasini serverda saqlash (`fetch(url, { next: { revalidate: 3600 } })`).
3. **Full Route Cache**: HTML va RSC payloadni serverda statik kesh qilish.
4. **Router Cache**: Brauzerda tashrif buyurilgan sahifalarni xotirada saqlash.
