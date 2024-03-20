'use client';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

interface MainProps {
  children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  return <S.Main>{children}</S.Main>;
}

const S = {
  Main: styled.main`
    padding: 2.4rem;

    @media ${mediaBreakpoint.tablet} {
      padding: 4rem 4rem 11.7rem 4rem;
    }

    @media ${mediaBreakpoint.pc} {
      width: 102.4rem;
      padding-top: 4.4rem;
      padding-bottom: 12.3rem;
    }
  `,
};
