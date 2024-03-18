'use client';

import { useEffect, useRef, useState } from 'react';

interface UseInViewParams {
  root?: IntersectionObserverInit['root'];
  rootMargin?: IntersectionObserverInit['rootMargin'];
  threshold?: IntersectionObserverInit['threshold'];
}

/**
 * @example
 *
 * const { intersectionObserveTargetRef, isIntersecting } = useInView<HTMLDivElement>();
 */
const useInView = <T extends HTMLElement>(IntersectionObserverInit?: UseInViewParams) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const intersectionObserveTargetRef = useRef<T>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry) setIntersecting(entry.isIntersecting);
    }, IntersectionObserverInit);

    if (intersectionObserveTargetRef.current) observer.observe(intersectionObserveTargetRef.current);

    return () => {
      if (intersectionObserveTargetRef.current) observer.disconnect();
    };
  }, []);

  return { intersectionObserveTargetRef, isIntersecting };
};

export { useInView };
