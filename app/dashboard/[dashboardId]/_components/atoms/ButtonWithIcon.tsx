'use client';

import { ButtonHTMLAttributes, PropsWithChildren, ReactElement } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

type ButtonWithIconProps = PropsWithChildren<{
  Icon?: ReactElement;
}> &
  ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonWithIcon = ({ children, Icon, ...rest }: ButtonWithIconProps) => {
  return (
    <S.Button {...rest}>
      {Icon ? <S.IconBox>{Icon}</S.IconBox> : ''}
      {children}
    </S.Button>
  );
};

export default ButtonWithIcon;

const S = {
  Button: styled.button`
    cursor: pointer;

    color: ${({ theme }) => theme.color.gray_787486};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: normal;

    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.8rem;

    padding: 0.7rem 1.2rem 0.6rem;

    border-radius: 0.6rem;
    border: 1px solid ${({ theme }) => theme.color.gray_D9D9D9};
    background: ${({ theme }) => theme.color.white_FFFFFF};

    @media ${mediaBreakpoint.tablet} {
      border-radius: 0.8rem;

      padding: 0.8rem 1.6rem;
    }

    @media ${mediaBreakpoint.pc} {
      font-size: 1.6rem;

      padding: 1rem 1.6rem;
    }
  `,

  IconBox: styled.div`
    display: none;

    @media ${mediaBreakpoint.tablet} {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;

      width: 2rem;
      height: 2rem;
    }
  `,
};
