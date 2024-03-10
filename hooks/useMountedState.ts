import { useCallback, useEffect, useRef } from 'react';

/**
 * @description useMountedState를 호출해서 반환된 get함수를 호출하면 mount된 후인지 확인할 수 있다.
 */
const useMountedState = () => {
  const mountedRef = useRef(false);
  const get = useCallback(() => mountedRef.current, []);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return get;
};

export { useMountedState };
