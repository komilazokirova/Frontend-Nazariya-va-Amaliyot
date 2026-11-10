# 🧩 Micro-Frontends Arxitekturasi

Katta hajmdagi monolit veb-ilovalarni mustaqil jamoalar tomonidan ishlab chiqiladigan va mustaqil deploy qilinadigan kichik ilovalarga bo'lish usuli.

## Asosiy Integratsiya Yondashuvlari:
1. **Module Federation (Webpack 5 & Vite)**:
   * Brauzer runtime vaqtida tashqi mustaqil repozitoriyadagi komponentlarni yuklab olish imkonini beradi.
   * Umumiy bog'liqliklarni (`react`, `react-dom`) bir necha bor yuklamasdan `shared` qilib bittalaydi.
2. **Single-SPA**:
   * Turli xil freymvorklarda (React, Vue, Angular) yozilgan ilovalarni bitta sahifada marshrutlar bo'yicha boshqarish.
3. **iFrames**:
   * Eng kuchli izolyatsiya, lekin xotira ko'p sarflaydi va o'zaro ma'lumot almashish noqulay.
