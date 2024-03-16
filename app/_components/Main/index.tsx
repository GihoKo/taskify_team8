import Image from 'next/image';
import styled from 'styled-components';

import heroImage from '@public/images/hero.png';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

export default function Main() {
  return (
    <S.Main>
      <S.HeroWrapper>
        <S.ImageWrapper>
          <Image src={heroImage} alt='히어로 이미지' fill />
        </S.ImageWrapper>
        <S.TitleWrapper>
          <S.WhiteText>새로운 일정 관리</S.WhiteText>
          <S.VioletText>Taskify</S.VioletText>
        </S.TitleWrapper>
        <S.ServiceDescription>서비스의 메인 설명 들어갑니다.</S.ServiceDescription>
        <S.LoginButton onClick={() => {}}>로그인하기</S.LoginButton>
      </S.HeroWrapper>
    </S.Main>
  );
}

const S = {
  Main: styled.main`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.color.black_000000};
    padding-top: 4.2rem;

    @media ${mediaBreakpoint.tablet} {
      padding-top: 9.4rem;
    }

    @media ${mediaBreakpoint.pc} {
      padding-top: 9.4rem;
    }
  `,

  HeroWrapper: styled.div`
    background-color: ${({ theme }) => theme.color.black_000000};
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  ImageWrapper: styled.div`
    position: relative;
    width: 28.7rem;
    height: 16.8rem;
    margin-bottom: 2.6rem;

    @media ${mediaBreakpoint.tablet} {
      width: 53.7rem;
      height: 31.4rem;
      margin-bottom: 4.8rem;
    }
    @media ${mediaBreakpoint.pc} {
      width: 72.2rem;
      height: 42.2rem;
      margin-bottom: 4.8rem;
    }
  `,
  TitleWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    @media ${mediaBreakpoint.tablet} {
      flex-direction: row;
      gap: 2.4rem;
    }

    @media ${mediaBreakpoint.tablet} {
      flex-direction: row;
      gap: 2.8rem;
    }
  `,

  WhiteText: styled.h1`
    color: ${({ theme }) => theme.color.white_FFFFFF};
    text-align: center;
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: -0.2rem;

    @media ${mediaBreakpoint.tablet} {
      font-size: 5.6rem;
    }

    @media ${mediaBreakpoint.pc} {
      font-size: 7.6rem;
    }
  `,
  VioletText: styled.h1`
    color: ${({ theme }) => theme.color.violet_5534DA};
    text-align: center;
    font-family: Montserrat;
    font-size: 42px;
    font-weight: 700;
    letter-spacing: -1px;

    @media ${mediaBreakpoint.tablet} {
      font-size: 70px;
      line-height: 65px; /* 92.857% */
    }

    @media ${mediaBreakpoint.pc} {
      font-size: 90px;
      line-height: 65px; /* 72.222% */
    }
  `,

  ServiceDescription: styled.p`
    color: ${({ theme }) => theme.color.white_FFFFFF};
    text-align: center;
    font-size: 1.2rem;
    letter-spacing: -0.1rem;
    margin-top: 1.8rem;
    margin-bottom: 7rem;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.4rem;
      margin-top: 2.4rem;
      margin-bottom: 6.6rem;
    }

    @media ${mediaBreakpoint.pc} {
      font-size: 1.6rem;
      margin-top: 2.4rem;
      margin-bottom: 6.6rem;
    }
  `,

  LoginButton: styled.button`
    border: none;
    display: flex;
    width: 23.52rem;
    color: ${({ theme }) => theme.color.white_FFFFFF};
    padding: 1.3rem 0rem 1.2rem 0rem;
    justify-content: center;
    align-items: center;

    border-radius: 8px;
    background: ${({ theme }) => theme.color.violet_5534DA};

    margin-bottom: 8rem;

    @media ${mediaBreakpoint.tablet} {
      width: 28rem;
      padding: 1.5rem 0rem 1.6rem 0rem;
      margin-bottom: 18.4rem;
    }

    @media ${mediaBreakpoint.pc} {
      width: 28rem;
      padding: 1.5rem 0rem 1.4rem 0rem;
      margin-bottom: 18.4rem;
    }
  `,
};
