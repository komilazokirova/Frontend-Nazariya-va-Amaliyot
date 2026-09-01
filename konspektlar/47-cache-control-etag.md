# 🏷️ HTTP Kesh Strategiyalari

* `Cache-Control: max-age=31536000, immutable`: O'zgarmas fayllar (JS, CSS bundle'lar) uchun 1 yillik kesh.
* `no-cache`: Har doim serverdan tekshirish kerakligini bildiradi (ETag bilan).
* `stale-while-revalidate`: Avval keshdagi eski ma'lumotni darhol ko'rsatib, fonda yangisini olib kelish.
