/**
 * DOM Manipulation va Focus-Trap Accessible Modal Controller - Versiya 73
 * TypeScriptda to'liq optimizatsiya qilingan production-grade modul
 */
/**
 * Accessible Focus-Trap Controller
 * Modallar ochilganda TAB klaviaturasi faqat modal ichida aylanadi
 */
export function createFocusTrap(element: HTMLElement) {
  const focusableElements = element.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
