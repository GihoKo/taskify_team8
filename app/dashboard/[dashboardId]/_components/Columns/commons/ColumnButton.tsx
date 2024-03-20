import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

interface ColumnButtonProps {
  onClick?: () => void;
}

// isColorButton prop에 버튼이름을 주면 됨.
export default function ColumnButton({ children, onClick }: PropsWithChildren<ColumnButtonProps>) {
  const isColorButton: boolean = children === '취소';

  return (
    <S.CreateButton onClick={onClick} $isColorButton={isColorButton}>
      {children}
    </S.CreateButton>
  );
}

interface StyledColumnButtonProps {
  $isColorButton: boolean;
}

const S = {
  CreateButton: styled.div<StyledColumnButtonProps>`
    background-color: ${({ $isColorButton, theme }) =>
      $isColorButton ? theme.color.white_FFFFFF : theme.color.violet_5534DA};
    color: ${({ $isColorButton, theme }) => ($isColorButton ? theme.color.gray_787486 : theme.color.white_FFFFFF)};
    font-size: 1.4rem;
    font-weight: 500;
    width: 13.8rem;
    height: 4.2rem;
    border-radius: 0.8rem;
    border: 1px solid ${({ $isColorButton, theme }) => ($isColorButton ? theme.color.gray_D9D9D9 : '')};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @media ${mediaBreakpoint.tablet} {
      font-size: 1.6rem;
      width: 12rem;
      height: 4.8rem;
    }
  `,
};
