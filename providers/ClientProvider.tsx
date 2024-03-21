'use client';

import { PropsWithChildren } from 'react';

import { ThemeProvider } from 'styled-components';

import { palette } from '@styles/theme';

import StyledComponentsRegistry from '@lib/styled-components/registry';

import TanstackQueryProviders from './TanstackQueryProvider';

type ClientProviderProps = PropsWithChildren;

const ClientProvider = ({ children }: ClientProviderProps) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={palette}>
        <TanstackQueryProviders>{children}</TanstackQueryProviders>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default ClientProvider;
