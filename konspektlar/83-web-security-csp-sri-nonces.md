# 🛡️ Web Security Chuqurlashtirilgan Tahlili

Brauzer darajasida zamonaviy xavfsizlik protokollari:

## 1. Content Security Policy (CSP):
XSS hujumlariga qarshi eng kuchli qalqon:
```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-rAnd0m123'; object-src 'none';
```
`nonce` (number used once) orqali faqat server tasdiqlagan inline skriptlarga ruxsat beriladi.

## 2. Subresource Integrity (SRI):
