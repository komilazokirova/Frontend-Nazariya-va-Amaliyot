# 🛡️ React Error Boundaries

Error Boundary — o'zining farzand komponentlaridagi JavaScript xatolarini ushlab qolib, butun oq sahifa (white screen of death) tushib qolishini oldini oluvchi klass komponent.

```tsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // Sentry yoki monitoring tizimiga yuborish
