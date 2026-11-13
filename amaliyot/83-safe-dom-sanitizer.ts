/**
 * Safe HTML Sanitizer
 * XSS hujumlarini oldini oluvchi toza DOM tozalash yordamchisi
 */
const ALLOWED_TAGS = new Set([
  'B', 'I', 'EM', 'STRONG', 'A', 'P', 'SPAN', 'UL', 'OL', 'LI', 'CODE', 'PRE'
]);

const ALLOWED_ATTRS = new Set(['href', 'title', 'class', 'target', 'rel']);

export function sanitizeHtml(rawHtml: string): string {
  if (typeof window === 'undefined') return rawHtml;

  const parser = new DOMParser();
  const doc = parser.parseFromString(rawHtml, 'text/html');

  function cleanNode(node: Node) {
    const children = Array.from(node.childNodes);
    for (const child of children) {
      if (child.nodeType === Node.ELEMENT_NODE) {
        const el = child as HTMLElement;
        if (!ALLOWED_TAGS.has(el.tagName)) {
          // Xavfli tegni matnga almashtirish yoki olib tashlash
          el.replaceWith(...Array.from(el.childNodes));
          continue;
        }

        // Ruxsat berilmagan atributlarni tozalash (masalan onclick, onload)
        for (const attr of Array.from(el.attributes)) {
          if (!ALLOWED_ATTRS.has(attr.name.toLowerCase())) {
            el.removeAttribute(attr.name);
          }
        }

        // Havolalarda xavfsizlik (target="_blank" rel="noopener noreferrer")
        if (el.tagName === 'A') {
          const href = el.getAttribute('href') || '';
          if (href.startsWith('javascript:')) {
            el.removeAttribute('href');
          } else {
