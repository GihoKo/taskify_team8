import { createContext } from 'react';

interface PageTurnerContextProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPage: number;
}

export const PageTurnerContext = createContext;
