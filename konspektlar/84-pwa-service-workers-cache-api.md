# 📱 Progressive Web Apps (PWA) va Service Workers

Service Worker — brauzer va tarmoq o'rtasida turuvchi dasturlashtiriladigan proksi (proxy) serverdir.

## Service Worker Hayot Sikli (Lifecycle):
1. **Registration**: Skript brauzerda ro'yxatdan o'tadi (`navigator.serviceWorker.register`).
2. **Installation (`install` hodisasi)**: Asosiy statik resurslar (HTML, CSS, asosiy piktogrammalar) keshga joylanadi.
3. **Activation (`activate` hodisasi)**: Eski kesh versiyalari tozalanadi va boshqaruv yangi versiyaga o'tadi.
4. **Fetch (`fetch` hodisasi)**: Har qanday tarmoq so'rovi ushlanadi va kesh strategiyasi bo'yicha javob beriladi.

