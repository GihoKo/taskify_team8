'use client';

import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { Dashboard, getDashboardList } from '@apis/dashboards/getDashboardList';
import createDashboardIcon from '@public/images/icons/add-filledGray_787486-w20-w20.svg';
import crown from '@public/images/icons/crown-filledYellow-FDD446-w16-h12.svg';
import LogoSvg from '@public/images/logos/logo-small-filledViolet-w28.82-h33.07.svg?component';
import TaskifySvg from '@public/images/logos/taskify-text-small-filledViolet-w80-h22.svg?component';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import ColoredDot from '@components/atoms/ColoredDot';
import { SIDE_BAR_PAGE_GROUP_NUMBER } from '@components/constants';

import useModal from '@hooks/use-modal';

import PageNationButton from '../../atoms/PageNationButton';

export default function SideBar() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>();

  const { data, isSuccess } = useQuery({
    queryKey: ['dashboard', 'dashboardList', currentPage, SIDE_BAR_PAGE_GROUP_NUMBER],
    queryFn: () => getDashboardList(currentPage, SIDE_BAR_PAGE_GROUP_NUMBER),
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
      setTotalPage(Math.ceil(data.totalCount / SIDE_BAR_PAGE_GROUP_NUMBER));
    }
  }, [data, isSuccess, currentPage]);

  // 대시보드 생성 버튼 클릭
  const { openModal } = useModal();

  const handleCreateDashboardButtonClick = async () => {
    const CreateDashboardModal = await import('@components/organisms/CreateDashboardModal').then(
      (module) => module.default,
    );

    openModal(CreateDashboardModal);
  };

  return (
    <S.Wrapper>
      <S.SideBarArea>
        {/* 로고 */}
        <S.TitleSvgWrap href='/'>
          <S.PencilLogoSvg />
          <S.TextLogoSvg />
        </S.TitleSvgWrap>

        {/* 대시보드 생성 버튼 박스 */}
        <S.CreateDashboardBox>
          <S.CreateDashboardText>Dash Boards</S.CreateDashboardText>
          <S.CreateDashboardButton onClick={handleCreateDashboardButtonClick}>
            <Image src={createDashboardIcon} alt='대시보드 생성 아이콘' width={20} height={20} />
          </S.CreateDashboardButton>
        </S.CreateDashboardBox>

        {/* 대시보드 아이템 리스트 */}
        <S.DashboardContainer>
          {dashboards.map((dashboard) => {
            return (
              <Link href={`/dashboard/${dashboard.id}`} key={dashboard.id} style={{ textDecoration: 'none' }}>
                <S.DashboardItem>
                  <ColoredDot color={dashboard.color} />
                  <S.DashboardName $isMyDashboard={dashboard.createdByMe}>{dashboard.title}</S.DashboardName>
                  {dashboard.createdByMe ? (
                    <S.ImageWrapper>
                      <Image src={crown} alt='왕관 이미지' fill />
                    </S.ImageWrapper>
                  ) : null}
                </S.DashboardItem>
              </Link>
            );
          })}
        </S.DashboardContainer>
        {/* 페이지 네이션 버튼 */}
        <S.PageNationButtonWrapper>
          <PageNationButton status='previous' disabled={currentPage === 1} onClick={handlePreviousDashboardPageClick} />
          <PageNationButton status='next' disabled={currentPage === totalPage} onClick={handleNextDashboardPageClick} />
        </S.PageNationButtonWrapper>
      </S.SideBarArea>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    margin-right: 6.7rem;

    @media ${mediaBreakpoint.tablet} {
      margin-right: 16rem;
    }
    @media ${mediaBreakpoint.pc} {
      margin-right: 30rem;
    }
  `,
  SideBarArea: styled.div`
    width: 6.7rem;
    height: 100vh;
    border-right: 1px solid ${({ theme }) => theme.color.gray_D9D9D9};
    position: fixed;

    @media ${mediaBreakpoint.tablet} {
      width: 16rem;
    }

    @media ${mediaBreakpoint.pc} {
      width: 30rem;
    }
  `,

  PencilLogoSvg: styled(LogoSvg)`
    @media ${mediaBreakpoint.tablet} {
      width: 2.88rem;
      height: 3.3rem;
    }
  `,

  TextLogoSvg: styled(TaskifySvg)`
    display: none;

    @media ${mediaBreakpoint.tablet} {
      display: block;
      width: 8rem;
      height: 2.2rem;
    }
  `,

  TitleSvgWrap: styled(Link)`
    display: flex;
    align-items: center;
    margin: 2rem 2.24rem 3.89rem 2.2rem;

    @media ${mediaBreakpoint.tablet} {
      margin: 2rem 2.52rem 5.99rem 2.6rem;
    }
    @media ${mediaBreakpoint.pc} {
      margin: 2rem 0 5.99rem 2.4rem;
    }
  `,

  CreateDashboardBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.2rem;

    @media ${mediaBreakpoint.tablet} {
      justify-content: space-between;
      padding-left: 2.4rem;
      padding-right: 2rem;
      margin-bottom: 3rem;
    }

    @media ${mediaBreakpoint.pc} {
      padding-right: 2.4rem;
    }
  `,

  CreateDashboardButton: styled.button`
    border: none;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
  `,

  CreateDashboardText: styled.div`
    display: none;

    @media ${mediaBreakpoint.tablet} {
      display: block;
      color: ${({ theme }) => theme.color.gray_787486};
      font-size: 1.2rem;
      font-weight: 700;
    }
  `,

  DashboardContainer: styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 1.4rem;
    padding-right: 1.3rem;
    position: relative;

    @media ${mediaBreakpoint.tablet} {
      padding-right: 1.2rem;
    }
    @media ${mediaBreakpoint.pc} {
      padding-left: 1.2rem;
    }
  `,

  DashboardItem: styled.li`
    width: 4rem;
    height: 4rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 1.6rem;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.color.violet_F1EFFD};
    }

    @media ${mediaBreakpoint.tablet} {
      width: 100%;
      padding: 1.2rem 0 1.2rem 1rem;
    }
    @media ${mediaBreakpoint.pc} {
      width: 100%;
      padding-left: 1.2rem;
    }
  `,

  DashboardName: styled.div<{ $isMyDashboard: boolean }>`
    display: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    @media ${mediaBreakpoint.tablet} {
      display: block;
      color: ${({ theme }) => theme.color.gray_787486};
      font-size: 1.6rem;
      font-weight: 500;
      padding-left: 1.6rem;
      padding-right: ${({ $isMyDashboard }) => ($isMyDashboard ? '0.4rem' : '0')};
    }

    @media ${mediaBreakpoint.pc} {
      font-size: 1.8rem;
      padding-right: 0.6rem;
    }
  `,

  ImageWrapper: styled.div`
    width: 1.5rem;
    height: 1.2rem;
    display: none;
    position: relative;
    align-self: normal;
    flex-shrink: 0;

    @media ${mediaBreakpoint.tablet} {
      display: block;
      width: 1.5rem;
      height: 1.2rem;
    }

    @media ${mediaBreakpoint.pc} {
      width: 1.76rem;
      height: 1.4rem;
    }
  `,

  PageNationButtonWrapper: styled.div`
    display: none;
    position: absolute;
    left: 0.75rem;
    bottom: 0.94rem;

    @media ${mediaBreakpoint.tablet} {
      display: flex;
    }
  `,
};
