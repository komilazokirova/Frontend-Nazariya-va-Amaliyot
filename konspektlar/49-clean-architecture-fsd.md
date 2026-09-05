# 🏗️ Feature-Sliced Design (FSD) Arxitekturasi

Katta Frontend loyihalarini tartibga solish standarti:

```
src/
├── app/          # Butun ilova sozlamalari, providerlar, marshrutlar
├── pages/        # To'liq sahifalar
├── widgets/      # Murakkab UI bloklar (Navbar, Sidebar)
├── features/     # Foydalanuvchi amallari (AuthByEmail, AddToCart)
├── entities/     # Biznes mohiyatlar (User, Product, Order)
└── shared/       # Qayta ishlatiluvchi UI kit, API klient, yordamchilar
```
