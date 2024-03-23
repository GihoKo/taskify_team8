'use client';

import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';
import { dashboardNavbarHeight } from '@styles/navbarHeight';

type ContentsAreaProps = PropsWithChildren;

const ContentsArea = ({ children }: ContentsAreaProps) => {
  return <S.Area>{children}</S.Area>;
};

export default ContentsArea;

const S = {
  Area: styled.main`
    width: 100%;
    min-width: 30.8rem;
    /* height: 100%; */
    /* height: calc(100% - ${dashboardNavbarHeight.onMobile}); */
    margin-top: ${dashboardNavbarHeight.onMobile};
    height: 100%;
    flex-shrink: 0;

    display: flex;
    flex-direction: column;

    padding: 1.6rem 1.2rem 2.4rem;

    @media ${mediaBreakpoint.tablet} {
      padding: 2rem 2rem 4.8rem;
      /* height: calc(100% - ${dashboardNavbarHeight.onTablet}); */
      margin-top: ${dashboardNavbarHeight.onTablet};
    }

    @media ${mediaBreakpoint.pc} {
      max-width: 62rem;
      height: calc(100vh - ${dashboardNavbarHeight.onPc});
      /* margin-top: ${dashboardNavbarHeight.onPc}; */
      margin-top: 0;
    }
  `,
};
