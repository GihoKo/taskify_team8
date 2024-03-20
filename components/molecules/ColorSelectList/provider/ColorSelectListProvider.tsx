'use client';

import { PropsWithChildren, useMemo, useState } from 'react';

import { ResponsiveBooleanUtility } from '@interface/style';

import { ColorSelectListContext, ColorSelectListContextValues } from '../context/ColorSelectListContext';

type ColorSelectListProviderProps = PropsWithChildren<{
  /**
   * 화면 분기에 따라 선택된 색상만 보여줄지 여부
   */
  shouldShowSelectedColorChipOnly?: ResponsiveBooleanUtility;
}>;

const ColorSelectListProvider = ({
  children,
  shouldShowSelectedColorChipOnly: shouldShowSelectedChipOnly,
}: ColorSelectListProviderProps) => {
  const [selectedColor, setSelectedColor] = useState<string>('');

  const memoizedObject: ColorSelectListContextValues = useMemo(
    () => ({ selectedColor, setSelectedColor, shouldShowSelectedChipOnly }),
    [selectedColor, shouldShowSelectedChipOnly],
  );

  return <ColorSelectListContext.Provider value={memoizedObject}>{children}</ColorSelectListContext.Provider>;
};

export default ColorSelectListProvider;
