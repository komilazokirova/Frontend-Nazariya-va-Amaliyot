# 🛡️ Web Security Chuqurlashtirilgan Tahlili

Brauzer darajasida zamonaviy xavfsizlik protokollari:

## 1. Content Security Policy (CSP):
XSS hujumlariga qarshi eng kuchli qalqon:
```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-rAnd0m123'; object-src 'none';
```
`nonce` (number used once) orqali faqat server tasdiqlagan inline skriptlarga ruxsat beriladi.

## 2. Subresource Integrity (SRI):
CDN dan yuklanayotgan skriptlar o'zgartirilmaganligini kriptografik xesh (SHA-384) bilan tekshirish:
```html
<script src="https://cdn.example.com/lib.js" integrity="sha384-..." crossorigin="anonymous"></script>
```

## 3. CORS (Cross-Origin Resource Sharing):
Preflight `OPTIONS` so'rovi va `Access-Control-Allow-Origin` xavfsizlik qoidalari.
