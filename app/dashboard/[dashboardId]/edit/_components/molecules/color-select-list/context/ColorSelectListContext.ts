import { createContext, Dispatch, SetStateAction } from 'react';

type ColorSelectListContextProps = {
  selectedColor: string;
  setSelectedColor: Dispatch<SetStateAction<string>>;
};

export const ColorSelectListContext = createContext<ColorSelectListContextProps | null>(null);
