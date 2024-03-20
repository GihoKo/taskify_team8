import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import { getFirstDashboard } from '@/app/mydashboard/_components/apis/api';
import LogoSvg from '@public/images/logos/logo-small-unfilled-w23-h37.svg?component';
import LogoTextSvg from '@public/images/logos/taskify-text-small-unfilled-w80-h22.svg?component';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import SignButton from '../commons/SIgnButton';

export default function Navbar() {
  const router = useRouter();
  // eslint-disable-next-line
  const [isLogin, setIsLogin] = useState(true);

  // 로그인 상태면 첫번째 대시보드로 이동
  useEffect(() => {
    (async () => {
      if (isLogin) {
        const firstDashboardId = await getFirstDashboard();
        router.push(`/dashboard/${firstDashboardId}`);
      }
    })();
  });

  const handleGotoLogInButtonClick = () => {
    router.push('/login');
  };

  const handleGotoSignUpButtonClick = () => {
    router.push('/signup');
  };

  return (
    <S.Navbar>
      <S.Logo href='/'>
        <S.LogoImage />
        <S.LogoText />
      </S.Logo>
      <S.ButtonWrapper>
        <SignButton onClick={handleGotoLogInButtonClick}>로그인</SignButton>
        <SignButton onClick={handleGotoSignUpButtonClick}>회원가입</SignButton>
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
      padding-right: 8rem;
      padding-left: 8rem;
    }
  `,

  LogoImage: styled(LogoSvg)`
    width: 2.36rem;
    height: 2.71rem;

    @media ${mediaBreakpoint.tablet} {
      width: 2.88rem;
      height: 3.3rem;
    }
    @media ${mediaBreakpoint.pc} {
      width: 2.88rem;
      height: 3.3rem;
    }
  `,

  Logo: styled(Link)`
    display: flex;
    align-items: center;
  `,

  LogoText: styled(LogoTextSvg)`
    display: none;

    @media ${mediaBreakpoint.tablet} {
      display: block;
      width: 8rem;
      height: 2.2rem;
    }
  `,

  ButtonWrapper: styled.div`
    display: flex;
    gap: 2rem;

    @media ${mediaBreakpoint.tablet} {
      gap: 3.6rem;
    }
  `,
};
