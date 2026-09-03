# 🔒 Veb Xavfsizlik Asoslari

1. **XSS (Cross-Site Scripting)**: Begona JavaScript kodini kiritish. Oldini olish: HTML escaping, `dangerouslySetInnerHTML` dan qochish, CSP (Content Security Policy).
2. **CSRF (Cross-Site Request Forgery)**: Foydalanuvchi nomidan yashirin so'rov yuborish. Oldini olish: `SameSite=Strict/Lax` cookies va CSRF tokenlar.
3. **Clickjacking**: Saytni shaffof `<iframe>` ichiga olib aldash. Oldini olish: `X-Frame-Options: DENY`.
