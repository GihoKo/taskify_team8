import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import Logo from './Logo';
import NavbarButton from '../atoms/NavbarButton';

export default function Navbar() {
  return (
    <S.Navbar>
      <Logo />
      <S.ButtonWrapper>
        <NavbarButton onClick={() => {}}>로그인</NavbarButton>
        <NavbarButton onClick={() => {}}>회원가입</NavbarButton>
      </S.ButtonWrapper>
    </S.Navbar>
  );
}

const S = {
  Navbar: styled.nav`
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 2.4rem;
    padding-left: 2.4rem;
    background-color: ${({ theme }) => theme.color.black_000000};

    @media ${mediaBreakpoint.tablet} {
      height: 7rem;
      padding-right: 4rem;
      padding-left: 4rem;
    }

    @media ${mediaBreakpoint.pc} {
      height: 7rem;
      padding-right: 8rem;
      padding-left: 8rem;
    }
  `,
  ButtonWrapper: styled.div`
    display: flex;
    gap: 2rem;

    @media ${mediaBreakpoint.tablet} {
      gap: 3.6rem;
    }

    @media ${mediaBreakpoint.pc} {
      gap: 3.6rem;
    }
  `,
};
