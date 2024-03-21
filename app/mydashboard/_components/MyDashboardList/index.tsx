'use client';

import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import styled from 'styled-components';

import createIcon from '@public/images/icons/add-filledViolet_5534DA-16w-16h.svg';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import PageNationButton from '@components/atoms/PageNationButton';

import DashboardItem from './DashboardItem';
import { Dashboard, getDashboardList } from '../apis/api';
import { handleCreateDashboardClick } from '../mock/mock';

export default function MyDashboardList() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>();

  const { data, isSuccess } = useQuery({
    queryKey: ['dashboard', 'dashboardList', currentPage],
    queryFn: () => getDashboardList(currentPage),
  });
  const [dashboards, setDashboards] = useState<Dashboard[]>(data?.dashboards || []);

  const handleNextDashboardPageClick = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousDashboardPageClick = () => {
    setCurrentPage((prev) => prev - 1);
  };

  // 대시보드 리스트 조회
  useEffect(() => {
    if (isSuccess) {
      setDashboards(data?.dashboards);
      setTotalPage(Math.ceil(data.totalCount / 5));
    }
  }, [data, isSuccess, currentPage]);

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
        {dashboards.map((item) => (
          <DashboardItem key={item.id} {...item} />
        ))}
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
