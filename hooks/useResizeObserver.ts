'use client';

import { DependencyList, useEffect, useRef, useState } from 'react';

/**
 * observerTargetRef 지정하지 않으면 기본값 document.documentElement
 */
export const useResizeObserver = <T extends HTMLElement>(dependencyList: DependencyList = []) => {
  const [resizeInfo, setResizeInfo] = useState<DOMRect | null>(null);
  const observerTargetRef = useRef<T>();

  useEffect(() => {
    /**
     * TODO: ResizeObserver polyfill 알아보기
     */
    // eslint-disable-next-line compat/compat
    const resizeObserver = new ResizeObserver(([entry]) => {
      if (entry && entry.target.getBoundingClientRect) {
        setResizeInfo(entry.target.getBoundingClientRect());
      }
    });

    if (!observerTargetRef.current) observerTargetRef.current = document.documentElement as T;

    resizeObserver.observe(observerTargetRef.current);

    return () => {
      resizeObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencyList);

  return { observerTargetRef, resizeInfo };
};
