import Image from 'next/image';
import styled from 'styled-components';

import heroImage from '@public/images/mocks/hero.png';
import priorityFeatureImage from '@public/images/mocks/priority-feature.png';
import TodoFeatureImage from '@public/images/mocks/todo-feature.png';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import { LANDING_PAGE_VARIOUS_SETTING_ITEMS } from '../constants';
import { handleGotoSignInButtonClick } from '../mock';

export default function Main() {
  return (
    <S.MainArea>
      <S.HeroBox>
        <S.HeroImageWrapper>
          <Image fill src={heroImage} alt='히어로 이미지' />
        </S.HeroImageWrapper>
        <S.TitleWrapper>
          <S.WhiteText>새로운 일정 관리</S.WhiteText>
          <S.VioletText>Taskify</S.VioletText>
        </S.TitleWrapper>
        <S.ServiceDescription>서비스의 메인 설명 들어갑니다.</S.ServiceDescription>
        <S.LoginButton onClick={handleGotoSignInButtonClick}>로그인하기</S.LoginButton>
      </S.HeroBox>

      <S.IntroduceBox>
        <S.PointFeatureContainer>
          <S.PriorityWrapper>
            <S.PriorityDescriptionWrapper>
              <S.PointLabel>Point 1</S.PointLabel>
              <S.PointDescription>
                일의 우선순위를
                <br /> 관리하세요
              </S.PointDescription>
            </S.PriorityDescriptionWrapper>
            <S.PriorityImagePositioner>
              <S.PriorityImageWrapper>
                <Image src={priorityFeatureImage} alt='우선순위 기능 소개 이미지' fill />
              </S.PriorityImageWrapper>
            </S.PriorityImagePositioner>
          </S.PriorityWrapper>
          <S.TodoWrapper>
            <S.TodoDescriptionWrapper>
              <S.PointLabel>Point 2</S.PointLabel>
              <S.PointDescription>
                해야 할 일을
                <br /> 등록하세요
              </S.PointDescription>
            </S.TodoDescriptionWrapper>
            <S.TodoImagePositioner>
              <S.TodoImageWrapper>
                <Image src={TodoFeatureImage} alt='우선순위 기능 소개 이미지' fill />
              </S.TodoImageWrapper>
            </S.TodoImagePositioner>
          </S.TodoWrapper>
        </S.PointFeatureContainer>

        <S.SettingBox>
          <S.SettingIntroduce>생산성을 높이는 다양한 설정 ⚡</S.SettingIntroduce>
          <S.SettingContainer>
            {LANDING_PAGE_VARIOUS_SETTING_ITEMS.map((item) => (
              <S.SettingWrapper key={item.id}>
                <S.SettingImageWrapper>
                  <S.SettingImage>
                    <Image src={item.imageSource} alt='설정 이미지' layout='fill' objectFit='contain' />
                  </S.SettingImage>
                </S.SettingImageWrapper>
                <S.SettingDescriptionWrapper>
                  <S.SettingTitle>{item.title}</S.SettingTitle>
                  <S.SettingDescription>{item.description}</S.SettingDescription>
                </S.SettingDescriptionWrapper>
              </S.SettingWrapper>
            ))}
          </S.SettingContainer>
        </S.SettingBox>
      </S.IntroduceBox>
    </S.MainArea>
  );
}

const S = {
  MainArea: styled.main`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.color.black_000000};
    padding-top: 4.2rem;

    @media ${mediaBreakpoint.tablet} {
      padding-top: 9.4rem;
    }
  `,

  HeroBox: styled.div`
    background-color: ${({ theme }) => theme.color.black_000000};
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  HeroImageWrapper: styled.div`
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
    font-size: 4.2rem;
    font-weight: 700;
    letter-spacing: -0.1rem;

    @media ${mediaBreakpoint.tablet} {
      font-size: 7rem;
      line-height: 6.5rem; /* 92.857% */
    }

    @media ${mediaBreakpoint.pc} {
      font-size: 9rem;
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
    }
  `,

  LoginButton: styled.button`
    border: none;
    display: flex;
    width: 23.52rem;
    color: ${({ theme }) => theme.color.white_FFFFFF};
    padding: 1.3rem 0rem 1.2rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.color.violet_5534DA};
    margin-bottom: 8rem;

    @media ${mediaBreakpoint.tablet} {
      width: 28rem;
      padding: 1.5rem 0rem 1.6rem;
      margin-bottom: 18.4rem;
    }
  `,

  IntroduceBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  PointFeatureContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 5.9rem;
    margin-bottom: 9rem;
  `,

  PriorityWrapper: styled.article`
    width: 34.3rem;
    height: 68.6rem;
    padding-top: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.color.black_171717};
    position: relative;

    @media ${mediaBreakpoint.tablet} {
      width: 66.4rem;
      height: 97.2rem;
      padding-top: 6.3rem;
      padding-left: 6rem;
    }
    @media ${mediaBreakpoint.pc} {
      width: 120rem;
      height: 60rem;
      flex-direction: row;
    }
  `,
  PriorityDescriptionWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 6.1rem;
  `,

  PriorityImagePositioner: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  `,

  PriorityImageWrapper: styled.div`
    border-radius: 0.8rem 0rem;
    overflow: hidden;
    width: 29.6rem;
    height: 24.8rem;
    position: relative;

    @media ${mediaBreakpoint.tablet} {
      width: 51.94rem;
      height: 43.5rem;
    }

    @media ${mediaBreakpoint.pc} {
      width: 59.4rem;
      height: 49.74rem;
    }
  `,

  TodoWrapper: styled.article`
    width: 34.3rem;
    height: 68.6rem;
    padding-top: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.color.black_171717};
    position: relative;

    @media ${mediaBreakpoint.tablet} {
      width: 66.4rem;
      height: 97.2rem;
      padding-top: 6.3rem;
    }

    @media ${mediaBreakpoint.pc} {
      width: 120rem;
      height: 60rem;
      flex-direction: row-reverse;
      justify-content: flex-end;
    }
  `,

  TodoDescriptionWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 6rem;
    gap: 6.1rem;

    @media ${mediaBreakpoint.pc} {
      padding-left: 0;
    }
  `,

  TodoImagePositioner: styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
  `,

  TodoImageWrapper: styled.div`
    border-radius: 0.8rem 0.8rem 0 0;
    overflow: hidden;
    width: 21.7rem;
    height: 25rem;
    position: relative;

    @media ${mediaBreakpoint.tablet} {
      width: 36rem;
      height: 41.5rem;
    }

    @media ${mediaBreakpoint.pc} {
      width: 43.6rem;
      height: 50.2rem;
      margin-left: 10.8rem;
      margin-right: 10rem;
    }
  `,

  PointLabel: styled.h2`
    color: ${({ theme }) => theme.color.gray_9FA6B2};
    text-align: center;
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-size: 1.8rem;
    font-weight: 500;

    @media ${mediaBreakpoint.tablet} {
      text-align: start;
      font-size: 2.2rem;
    }
  `,

  PointDescription: styled.p`
    color: ${({ theme }) => theme.color.white_FFFFFF};
    text-align: center;
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 6.4rem;

    @media ${mediaBreakpoint.tablet} {
      text-align: start;
      font-size: 4.8rem;
    }
  `,

  SettingBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  SettingIntroduce: styled.h3`
    color: ${({ theme }) => theme.color.white_FFFFFF};
    text-align: center;
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 4.2rem;

    @media ${mediaBreakpoint.tablet} {
      font-size: 2.8rem;
      margin-bottom: 3.6rem;
    }
  `,

  SettingContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media ${mediaBreakpoint.tablet} {
      gap: 4.8rem;
    }

    @media ${mediaBreakpoint.pc} {
      flex-direction: row;
      gap: 3.3rem;
    }
  `,

  SettingWrapper: styled.article`
    width: 34.3rem;
    border-radius: 0.8rem;
    overflow: hidden;

    @media ${mediaBreakpoint.tablet} {
      width: 37.8rem;
    }
  `,

  SettingImageWrapper: styled.div`
    width: 100%;
    height: 23.5rem;
    padding: 0rem 4.1rem;
    background-color: ${({ theme }) => theme.color.black_4B4B4B};

    @media ${mediaBreakpoint.tablet} {
      height: 26rem;
      padding: 0rem 3.9rem;
    }
  `,

  SettingImage: styled.div`
    width: 100%;
    height: 100%;
    position: relative;
  `,

  SettingDescriptionWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.7rem 3.2rem;
    background: ${({ theme }) => theme.color.black_171717};
    gap: 1.8rem;

    @media ${mediaBreakpoint.tablet} {
      padding-top: 3.3rem;
      height: 12.4rem;
    }
  `,

  SettingTitle: styled.h4`
    color: ${({ theme }) => theme.color.white_FFFFFF};
    font-size: 1.8rem;
    font-weight: 700;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.8rem;
    }
  `,

  SettingDescription: styled.p`
    color: ${({ theme }) => theme.color.gray_9FA6B2};
    font-size: 1.6rem;
    font-weight: 500;
  `,
};
