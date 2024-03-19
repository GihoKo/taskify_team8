import { createContext, Dispatch, SetStateAction } from 'react';

import { ResponsiveBooleanUtility } from '@interface/style';

export interface ColorSelectListContextValues {
  selectedColor: string;
  setSelectedColor: Dispatch<SetStateAction<string>>;
  shouldShowSelectedColorChipOnly?: ResponsiveBooleanUtility;
}

export const ColorSelectListContext = createContext<ColorSelectListContextValues | null>(null);
