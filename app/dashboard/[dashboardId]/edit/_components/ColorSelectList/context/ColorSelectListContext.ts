import { createContext, Dispatch, SetStateAction } from 'react';

interface ColorSelectListContextProps {
  selectedColor: string;
  setSelectedColor: Dispatch<SetStateAction<string>>;
}

export const ColorSelectListContext = createContext<ColorSelectListContextProps | null>(null);
