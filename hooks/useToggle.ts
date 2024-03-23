'use client';

import { Reducer, useReducer } from 'react';

const useToggle = <T>(initial: T) => {
  const [state, toggleState] = useReducer<Reducer<boolean, void>, T>((prev) => !prev, initial, Boolean);

  return [state, toggleState] as const;
};

export { useToggle };
