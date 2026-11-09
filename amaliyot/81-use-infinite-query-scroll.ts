import { useEffect, useRef, useCallback } from 'react';

/**
 * useInfiniteScroll Hook
 * Sahifa oxiriga yetganda avtomatik keyingi sahifani yuklaydi
 */
export function useInfiniteScroll(
  onIntersect: () => void,
  options: { enabled?: boolean; rootMargin?: string } = {}
) {
  const { enabled = true, rootMargin = '100px' } = options;
  const targetRef = useRef<HTMLDivElement | null>(null);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && enabled) {
        onIntersect();
      }
    },
    [onIntersect, enabled]
  );

  useEffect(() => {
