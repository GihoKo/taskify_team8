import { useContext } from 'react';

import { ColorSelectListContext } from '../context/ColorSelectListContext';

export const useColorSelectListContext = () => {
  const context = useContext(ColorSelectListContext);

  if (!context) {
    throw new Error('useColorSelectListContext must be used within a ColorSelectListProvider');
  }

  return context;
};
