'use client';

import { PropsWithChildren, useMemo, useState } from 'react';

import { ColorSelectListContext } from '../context/ColorSelectListContext';

type ColorSelectListProviderProps = PropsWithChildren;

const ColorSelectListProvider = ({ children }: ColorSelectListProviderProps) => {
  const [selectedColor, setSelectedColor] = useState<string>('');

  const memoizedObject = useMemo(() => ({ selectedColor, setSelectedColor }), [selectedColor]);

  return <ColorSelectListContext.Provider value={memoizedObject}>{children}</ColorSelectListContext.Provider>;
};

export default ColorSelectListProvider;
