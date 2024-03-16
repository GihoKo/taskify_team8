'use client';

import { ReactElement } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

interface ColumnModalBoxProps {
  children: ReactElement | ReactElement[];
}

export default function ColumnModalBox({ children }: ColumnModalBoxProps) {
  return <S.CreateColumnBox>{children}</S.CreateColumnBox>;
}

const S = {
  CreateColumnBox: styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.8rem 2rem;
    width: 32.7rem;
    height: 24.1rem;

    border: 1px solid tomato;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.color.white_FFFFFF};

    @media ${mediaBreakpoint.tablet} {
      width: 54rem;
      height: 27.6rem;
      padding: 3.2rem 2.8rem;
    }
  `,
};
