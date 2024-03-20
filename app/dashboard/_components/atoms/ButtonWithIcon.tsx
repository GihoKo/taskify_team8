'use client';

import { PropsWithChildren, ReactElement } from 'react';

import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

// interface AsLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
//   href: Url;
//   Icon?: ReactElement;
// }

// interface AsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
//   Icon?: ReactElement;
// }

export type ButtonWithIconProps = PropsWithChildren<{
  as?: 'button' | 'a';
  Icon?: ReactElement;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: Url;
}>;

// TODO: 시간 날 때 LinkButton typeof 써서 props 분리해두기
const ButtonWithIcon = ({ children, Icon, as, onClick, type, href }: ButtonWithIconProps) => {
  if (as === 'a') {
    return (
      <S.LinkButton href={href || ''} onClick={onClick} type={type}>
        {Icon ? <S.IconBox>{Icon}</S.IconBox> : ''}
        {children}
      </S.LinkButton>
    );
  }

  return (
    <S.Button onClick={onClick}>
      {Icon ? <S.IconBox>{Icon}</S.IconBox> : ''}
      {children}
    </S.Button>
  );
};

export default ButtonWithIcon;

const sharedButtonStyle = css`
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
`;

const S = {
  Button: styled.button`
    ${sharedButtonStyle}
  `,

  LinkButton: styled(Link)`
    ${sharedButtonStyle}

    text-decoration: none;
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
