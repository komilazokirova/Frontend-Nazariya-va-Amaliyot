/**
 * DOM Manipulation va Focus-Trap Accessible Modal Controller - Versiya 13
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

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  }

  element.addEventListener('keydown', handleKeyDown);
  firstElement?.focus();

  return {
