'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import createIcon from '@public/images/icons/add-filledViolet_5534DA-16w-16h.svg';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import PageNationButton from '@components/atoms/PageNationButton';

import DashboardItem from './DashboardItem';
import useDashboardList from './hook';

export default function MyDashboardList() {
  const {
    dashboards,
    totalPage,
    currentPage,
    handleNextDashboardPageClick,
    handlePreviousDashboardPageClick,
    handleCreateDashboardButtonClick,
  } = useDashboardList();

  return (
    <S.Box>
      <S.DashboardContainer>
        {dashboards.map((dashboard) => (
          <Link href={`/dashboard/${dashboard.id}`} key={dashboard.id} style={{ textDecoration: 'none' }}>
            <DashboardItem {...dashboard} />
          </Link>
        ))}
        <S.CreateDashboardButton onClick={handleCreateDashboardButtonClick}>
          <S.CreateDashboardButtonText>새로운 대시보드</S.CreateDashboardButtonText>
          <S.CreateDashboardIconPositioner>
            <S.CreateDashboardIconWrapper>
              <Image fill src={createIcon} alt={'대시보드 생성 버튼 이미지'} />
            </S.CreateDashboardIconWrapper>
          </S.CreateDashboardIconPositioner>
        </S.CreateDashboardButton>
      </S.DashboardContainer>
      <S.PageNationWrapper>
        <S.PageNationText>
          {totalPage} 페이지 중 {currentPage}
        </S.PageNationText>
        <PageNationButton status='previous' disabled={currentPage === 1} onClick={handlePreviousDashboardPageClick} />
        <PageNationButton status='next' disabled={currentPage === totalPage} onClick={handleNextDashboardPageClick} />
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
    height: 5.8rem;
    padding-top: 1.9rem;
    padding-bottom: 1.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    background: ${({ theme }) => theme.color.white_FFFFFF};
    cursor: pointer;

    @media ${mediaBreakpoint.tablet} {
      height: 6.8rem;
      padding-top: 2.3rem;
      padding-bottom: 2.3rem;
    }
    @media ${mediaBreakpoint.pc} {
      height: 7rem;
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
