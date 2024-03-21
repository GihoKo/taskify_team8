'use client';

import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';
import { dashboardNavbarHeight } from '@styles/navbarHeight';

type DashboardContentsAreaProps = PropsWithChildren;

const DashboardContentsArea = ({ children }: DashboardContentsAreaProps) => {
  return <S.Box>{children}</S.Box>;
};

export default DashboardContentsArea;

const S = {
  Box: styled.main`
    display: flex;
    flex-direction: column;

    width: 100%;
    /* height: 100%; */ /* TODO: 화면 높이에서 navbar 크기를 빼야 함 */
    /* height: calc(100% - ${dashboardNavbarHeight.onMobile}); */
    padding-top: ${dashboardNavbarHeight.onMobile};
    height: 100%;

    @media ${mediaBreakpoint.tablet} {
      width: 100%;

      /* height: calc(100% - ${dashboardNavbarHeight.onTablet}); */ /* tablet이랑 pc는 navbar 같은 높이 */
      padding-top: ${dashboardNavbarHeight.onTablet};
    }

    @media ${mediaBreakpoint.pc} {
      flex-direction: row;

      width: fit-content;
      padding-top: 0;
    }
  `,
};
