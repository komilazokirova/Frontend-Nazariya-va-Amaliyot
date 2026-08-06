# 🎣 React Custom Hooks Arxitekturasi

Custom Hook — komponentlar o'rtasida UI mantig'ini (stateful logic) qayta ishlatishning eng yaxshi usuli.

## Qoidalar:
1. Nomi har doim `use` so'zi bilan boshlanishi kerak (`useWindowSize`, `useAuth`).
2. Ichida faqat boshqa React hooklari va toza JavaScript mantig'i bo'lishi mumkin.
3. Hookdan ma'lumotlarni qaytarishda obyekt `{ data, loading }` yoki Tuple `[value, setter]` patternlaridan to'g'ri foydalanish.
