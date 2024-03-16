'use client';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

interface CreateModalTitleProps {
  children: string;
}

export default function CreateModalTitle({ children }: CreateModalTitleProps) {
  return <S.ColumnModalTitle>{children}</S.ColumnModalTitle>;
}

const S = {
  ColumnModalTitle: styled.h1`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2.4rem;
    color: ${({ theme }) => theme.color.black_333236};

    @media ${mediaBreakpoint.tablet} {
      font-size: 2.4rem;
      margin-bottom: 3.2rem;
    }
  `,
};
