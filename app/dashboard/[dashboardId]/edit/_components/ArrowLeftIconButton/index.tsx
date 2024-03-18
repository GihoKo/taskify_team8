'use client';

import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import ArrowLeftIcon from '../ArrowLeftIcon';

type ArrowLeftIconButtonProps = PropsWithChildren;

const ArrowLeftIconButton = ({ children }: ArrowLeftIconButtonProps) => {
  return (
    <S.Button type='button'>
      <ArrowLeftIcon />
      {children}
    </S.Button>
  );
};

export default ArrowLeftIconButton;

const S = {
  Button: styled.button`
    cursor: pointer;

    display: flex;
    align-items: flex-start; /* 텍스트가 여백 남기고 위에 붙어있음 */
    column-gap: 0.6rem;
    width: fit-content;

    color: ${({ theme }) => theme.color.black_333236};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: normal;

    padding: 0;
    border: none;
    background-color: transparent;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.6rem;
    }
  `,
};
