# 🚀 TanStack Query (React Query) v5 Chuqurlashtirilgan Tahlili

TanStack Query — asinxron server holatini (Server State) boshqarish, keshlashtirish va sinxronizatsiya qilish uchun eng kuchli vositadir.

## 📌 Asosiy Konsepsiyalar:
1. **`staleTime` vs `gcTime` (eski `cacheTime`)**:
   * `staleTime`: Ma'lumot qancha vaqt davomida "yangi" deb hisoblanishi. Bu vaqt ichida yangi so'rov tarmoqqa chiqmaydi, keshdan olinadi.
   * `gcTime`: Ishlatilmayotgan (unmounted) kesh xotirada qancha vaqt saqlanishi (default: 5 daqiqa).

2. **Query Invalidation (Keshni yangilash)**:
