'use client';

import { Fragment } from 'react';

import Image from 'next/image';
import { styled } from 'styled-components';

import { useGetDashboardDetailInfo } from '@/app/dashboard/[dashboardId]/edit/_hooks/useGetDashboardDetailInfo.query';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

interface DashboardNameProps {
  dashboardId: number;
}

const DashboardNameWithValidId = ({ dashboardId }: DashboardNameProps) => {
  const { data, isSuccess } = useGetDashboardDetailInfo(dashboardId);

  return (
    <>
      {isSuccess && data && (
        <>
          <S.DashBoardName>{data.title}</S.DashBoardName>
          <S.CrownIcon
            src={'/images/icons/crown-filledYellow-FDD446-w16-h12.svg'}
            alt='왕관 이미지'
            width={20.103}
            height={16}
          />
        </>
      )}
    </>
  );
};

export default DashboardNameWithValidId;

const S = {
  DashBoardName: styled.h1`
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 2rem;
    font-weight: 700;
    line-height: normal;

    @media ${mediaBreakpoint.pc} {
      display: block;
    }
  `,

  CrownIcon: styled(Image)`
    display: none; /* 내가 만든 대시보드가 아니면 보이면 안 됨. */

    @media ${mediaBreakpoint.pc} {
      display: inline-block;

      width: 2.0103rem;
      height: 1.6rem;
      flex-shrink: 0;
    }
  `,
};
