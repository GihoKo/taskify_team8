import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

interface ColumnButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => any;
  // isVaild?: boolean;
}

// isColorButton prop에 버튼이름을 주면 됨.
export default function ColumnButton({ children, type, onClick }: PropsWithChildren<ColumnButtonProps>) {
  const isColorButton: boolean = children === '취소';

  return (
    <S.CreateButton type={type} onClick={onClick} $isColorButton={isColorButton}>
      {children}
    </S.CreateButton>
  );
  //   <S.CreateButton $isVailid={isVaild} disabled={isVaild} onClick={onClick} $isColorButton={isColorButton}>
  //     {children}
  //   </S.CreateButton>
  // );
}

interface StyledColumnButtonProps {
  $isColorButton: boolean;
  // $isVailid: boolean;
}

const S = {
  CreateButton: styled.button<StyledColumnButtonProps>`
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

/* color: ${({ $isVailid }) => ($isVailid ? '' : 'tomato')}; */
/* cursor: ${({ $isVailid }) => ($isVailid ? 'pointer' : '')}; */
