'use client';

import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

type CardColumnProps = PropsWithChildren;

const CardColumn = ({ children }: CardColumnProps) => {
  return <S.Container>{children}</S.Container>;
};

export default CardColumn;

const S = {
  Container: styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    @media ${mediaBreakpoint.tablet} {
      row-gap: 1.6rem;
    }
  `,
};
