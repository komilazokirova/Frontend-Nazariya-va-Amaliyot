# 🛡️ Next.js Middleware: Autentifikatsiya va RBAC

Middleware — so'rov sahifaga yetib borishidan oldin Edge muhitida ishlaydi.

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
