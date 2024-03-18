'use client';

import { Reducer, useReducer } from 'react';

// TODO: 여기도 client 지시문 필요할까?
const useToggle = <T>(initial: T) => {
  const [state, toggleState] = useReducer<Reducer<boolean, void>, T>((prev) => !prev, initial, Boolean);

  return [state, toggleState] as const;
};

export { useToggle };
