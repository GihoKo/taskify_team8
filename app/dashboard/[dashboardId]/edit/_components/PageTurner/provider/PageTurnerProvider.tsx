'use client';

import { PropsWithChildren } from 'react';

import { PageTurnerContext } from '../context/PageTurnerContext';

type PageTurnerProviderProps = PropsWithChildren;

const PageTurnerProvider = ({ children }: PageTurnerProviderProps) => {
  return <PageTurnerContext.Provider value={undefined}>{children}</PageTurnerContext.Provider>;
};

export default PageTurnerProvider;
