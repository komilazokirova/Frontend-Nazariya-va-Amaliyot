# 🛡️ Next.js Middleware: Autentifikatsiya va RBAC

Middleware — so'rov sahifaga yetib borishidan oldin Edge muhitida ishlaydi.

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}
```
