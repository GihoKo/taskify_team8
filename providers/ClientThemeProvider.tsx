'use client';

import { PropsWithChildren } from 'react';

import { ThemeProvider } from 'styled-components';

import { palette } from '@styles/theme';

import StyledComponentsRegistry from '@utils/registry';

type ClientThemeProviderProps = PropsWithChildren;

const ClientThemeProvider = ({ children }: ClientThemeProviderProps) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={palette}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default ClientThemeProvider;
