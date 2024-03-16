'use client';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

interface ColumnButtonProps {
  text: string;
}
// text prop에 버튼이름을 주면 됨.

export default function ColumnButton({ text }: ColumnButtonProps) {
  return <S.CreateButton text={text}>{text}</S.CreateButton>;
}

const S = {
  CreateButton: styled.div<ColumnButtonProps>`
    background-color: ${({ text, theme }) => (text === '취소' ? theme.color.white_FFFFFF : theme.color.violet_5534DA)};
    color: ${({ text, theme }) => (text === '취소' ? theme.color.gray_787486 : theme.color.white_FFFFFF)};
    font-size: 1.4rem;
    font-weight: 500;
    width: 13.8rem;
    height: 4.2rem;
    border-radius: 0.8rem;
    border: 1px solid ${({ text, theme }) => (text === '취소' ? theme.color.gray_D9D9D9 : '')};
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.6rem;
      width: 12rem;
      height: 4.8rem;
    }
  `,
};
