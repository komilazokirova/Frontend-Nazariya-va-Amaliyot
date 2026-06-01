# 🌐 HTML5 Semantik Teglari, SEO va Accessibility (a11y)

Semantik HTML — bu veb-sahifa elementlarining ma'nosini ham brauzerga, ham qidiruv tizimlariga (SEO), ham ekran o'quvchi (Screen Reader) dasturlariga aniq bildirib turuvchi standartdir.

## 📌 Asosiy semantik teglari:
* `<header>`: Sahifa yoki bo'lim sarlavhasi, navigatsiya va logotiplar.
* `<nav>`: Asosiy navigatsiya havolalari to'plami.
* `<main>`: Sahifadagi asosiy, takrorlanmas unikal kontent.
* `<article>`: Mustaqil, alohida ma'noga ega bo'lgan maqola, post yoki kartochka.
* `<section>`: Tematik jihatdan birlashgan kontent bo'limi (sarlavhasi bo'lishi shart).
* `<aside>`: Qo'shimcha ma'lumotlar (sidebar, reklamalar, o'xshash havolalar).
* `<footer>`: Mualliflik huquqi, aloqa ma'lumotlari va sahifa yakuni.

## ♿ Accessibility (ARIA) Qoidalari:
1. `role` va `aria-*` atributlarini faqat semantik teglar yetarli bo'lmaganda qo'llash (First Rule of ARIA: Don't use ARIA if semantic HTML exists).
2. Rasmlarga har doim ma'noli `alt` atributini berish (dekorativ rasmlar uchun `alt=""`).
3. Interaktiv elementlar (tugmalar, havolalar) klaviatura orqali boshqarilishi (`tabindex`, `focus-visible`).
