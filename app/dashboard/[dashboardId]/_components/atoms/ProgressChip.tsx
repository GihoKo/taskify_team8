'use client';

import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

type ProgressChipProps = PropsWithChildren;

const ProgressChip = ({ children }: ProgressChipProps) => {
  return (
    <S.Box>
      <S.Dot />
      <S.Text>{children}</S.Text>
    </S.Box>
  );
};

export default ProgressChip;

const S = {
  Box: styled.div`
    display: flex;
    align-items: center;
    gap: 0.6rem;

    border-radius: 1.1rem;

    @media ${mediaBreakpoint.tablet} {
      column-gap: 0.8rem;
    }
  `,

  Dot: styled.div`
    width: 0.8rem;
    height: 0.8rem;
    flex-shrink: 0;

    border-radius: 50%;

    background: ${({ theme }) => theme.color.violet_5534DA};
  `,

  Text: styled.span`
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 1.6rem;
    font-weight: 700;
    line-height: normal;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.8rem;
    }
  `,
};
