'use client';

import { ReactElement } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

interface ColumnButtonsWrapProps {
  children: ReactElement | ReactElement[];
}

export default function ColumnButtonsWrap({ children }: ColumnButtonsWrapProps) {
  return <S.ColumnButtonsWrap>{children}</S.ColumnButtonsWrap>;
}

const S = {
  ColumnButtonsWrap: styled.div`
    display: flex;
    gap: 1.1rem;

    @media ${mediaBreakpoint.tablet} {
      gap: 1.2rem;
      justify-content: flex-end;
    }
  `,
};
