'use client';

import { PropsWithChildren } from 'react';

import styled from 'styled-components';

type NumberChipProps = PropsWithChildren;

const NumberChip = ({ children }: NumberChipProps) => {
  return <S.NumberBox>{children || 0}</S.NumberBox>;
};

export default NumberChip;

const S = {
  NumberBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 2rem;
    height: 2rem;
    padding: 0.3rem 0.6rem;

    border-radius: 0.4rem;
    background: ${({ theme }) => theme.color.gray_EEEEEE};

    color: ${({ theme }) => theme.color.gray_787486};
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: normal;
  `,
};
