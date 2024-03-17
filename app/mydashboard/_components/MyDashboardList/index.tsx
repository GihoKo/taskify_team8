import Image from 'next/image';
import styled from 'styled-components';

import createIcon from '@public/images/icons/add-filledViolet_5534DA-16w-16h.svg';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import DashboardItem from './DashboardItem';
import PageNationButton from '../commons/PageNationButton';
import {
  dashboardMock,
  handleCreateDashboardClick,
  handleDashboardClick,
  PageNationNextButtonMock,
  PagenationPreviouseButtonMock,
  PageNationTextMock,
} from '../mock/mock';

export default function MyDashboardList() {
  return (
    <S.Box>
      <S.DashboardContainer>
        <S.CreateDashboardButton onClick={handleCreateDashboardClick}>
          <S.CreateDashboardButtonText>새로운 대시보드</S.CreateDashboardButtonText>
          <S.CreateDashboardIconPositioner>
            <S.CreateDashboardIconWrapper>
              <Image fill src={createIcon} alt={'대시보드 생성 버튼 이미지'} />
            </S.CreateDashboardIconWrapper>
          </S.CreateDashboardIconPositioner>
        </S.CreateDashboardButton>
        {dashboardMock.map((item) => (
          <DashboardItem key={item.id} onClick={handleDashboardClick} {...item} />
        ))}
      </S.DashboardContainer>
      <S.PageNationWrapper>
        <S.PageNationText>
          {PageNationTextMock.total} 페이지 중 {PageNationTextMock.current}
        </S.PageNationText>
        <PageNationButton {...PagenationPreviouseButtonMock} />
        <PageNationButton {...PageNationNextButtonMock} />
      </S.PageNationWrapper>
    </S.Box>
  );
}

const S = {
  Box: styled.div`
    display: flex;
    flex-direction: column;
  `,

  DashboardContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    @media ${mediaBreakpoint.tablet} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    @media ${mediaBreakpoint.pc} {
      grid-template-columns: repeat(3, 1fr);
    }
  `,

  CreateDashboardButton: styled.button`
    border-radius: 0.8rem;
    border: 0.1rem solid ${({ theme }) => theme.color.gray_D9D9D9};
    width: 100%;
    padding-top: 1.9rem;
    padding-bottom: 1.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    background: ${({ theme }) => theme.color.white_FFFFFF};
    cursor: pointer;

    @media ${mediaBreakpoint.tablet} {
      padding-top: 2.3rem;
      padding-bottom: 2.3rem;
    }
    @media ${mediaBreakpoint.pc} {
      padding-top: 2.4rem;
      padding-bottom: 2.4rem;
    }
  `,
  CreateDashboardButtonText: styled.span`
    color: ${({ theme }) => theme.color.black_333236};
    text-align: center;
    font-size: 1.4rem;
    font-weight: 600;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.6rem;
    }
  `,

  CreateDashboardIconPositioner: styled.div`
    display: flex;
    width: 2rem;
    height: 2rem;
    padding: 0.28rem;
    justify-content: center;
    align-items: center;

    border-radius: 0.4rem;
    background: ${({ theme }) => theme.color.violet_F1EFFD};

    @media ${mediaBreakpoint.tablet} {
      CreateDashboardIcon {
        width: 2.2rem;
        height: 2.2rem;
      }
    }
  `,

  CreateDashboardIconWrapper: styled.div`
    width: 1.45rem;
    height: 1.45rem;
    position: relative;

    @media ${mediaBreakpoint.tablet} {
      width: 1.6rem;
      height: 1.6rem;
    }
  `,

  PageNationWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    margin-top: 0.8rem;

    @media ${mediaBreakpoint.tablet} {
      margin-top: 1rem;
    }

    @media ${mediaBreakpoint.tablet} {
      margin-top: 1.2rem;
    }
  `,

  PageNationText: styled.span`
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 1.2rem;
    font-weight: 400;
    margin-right: 1.2rem;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.4rem;
      margin-right: 1.6rem;
    }
  `,
};
