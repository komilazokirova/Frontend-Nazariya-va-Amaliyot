# 🎯 `this` Kalit So'zining 4 Asosiy Qoidasi

JavaScriptda `this` qiymati funksiya qayerda yozilganiga emas, **qanday chaqirilganiga** bog'liq.

1. **Default Binding**: Oddiy funksiya chaqiruvi (`fn()`). `strict mode` da `undefined`, aks holda `window`.
2. **Implicit Binding**: Obyekt metodi sifatida chaqirish (`obj.fn()`). `this` bu `obj`.
3. **Explicit Binding**: `call`, `apply` yoki `bind` orqali `this` ni qo'lda berish.
4. **`new` Binding**: Konstruktor orqali chaqirish (`new Fn()`). Yangi yaratilgan obyekt `this` bo'ladi.

> ⚠️ **Arrow Functions (`=>`)**: O'zlarining `this` ga ega emas! Ular `this` ni o'zlari e'lon qilingan leksik muhitdan oladi.
