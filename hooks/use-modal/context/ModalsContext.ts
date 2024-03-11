'use client';

import { createContext, useContext } from 'react';

import { IModalListDispatchContext, TModalListStateContext } from '../types';

export const ModalListDispatchContext = createContext<IModalListDispatchContext | undefined>(undefined);

export const ModalListStateContext = createContext<TModalListStateContext>([]);

export const useModalListDispatch = () => {
  const context = useContext(ModalListDispatchContext);

  if (context === undefined) throw new Error('useModalsDispatch should be within ModalProvider');

  return context;
};
