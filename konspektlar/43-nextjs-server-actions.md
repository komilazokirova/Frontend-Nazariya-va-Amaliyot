# ⚡ Next.js Server Actions: Xavfsiz Server Mutatsiyalari

Server Actions — bu serverda bajariladigan asinxron funksiyalar bo'lib, ularni to'g'ridan-to'g'ri formaning `action` atributiga berish mumkin:

```tsx
// actions.ts
'use server';

export async function createTodo(formData: FormData) {
