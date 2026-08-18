# 🐻 Zustand Arxitekturasi va Best Practices

Zustand — React ilovalari uchun zamonaviy, tezkor va yengil state management tizimi.

## Afzalliklari:
1. **No Provider**: Butun ilovani Provider bilan o'rab o'tirish shart emas.
2. **Selective Subscriptions**: Faqat kerakli maydonga obuna bo'lish orqali re-renderni minimallashtiradi:
   ```tsx
   const name = useUserStore(state => state.user.name);
   ```
3. **Middleware**: `persist` (localStorage bilan saqlash), `devtools` (Redux DevTools da kuzatish).
