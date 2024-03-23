'use client';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';
import { dashboardNavbarHeight } from '@styles/navbarHeight';

interface MainProps {
  children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  return <S.Main>{children}</S.Main>;
}

const S = {
  Main: styled.main`
    padding: 2.4rem;
    padding-top: calc(2.4rem + ${dashboardNavbarHeight.onMobile}); /* 2.4rem + ${dashboardNavbarHeight.onMobile} */

    @media ${mediaBreakpoint.tablet} {
      padding: 4rem 4rem 11.7rem 4rem;
      padding-top: calc(4rem + ${dashboardNavbarHeight.onTablet}); /* 4rem + ${dashboardNavbarHeight.onTablet}*/
    }

    @media ${mediaBreakpoint.pc} {
      width: 102.4rem;
      /* padding-top: 4.4rem; */
      padding-top: 4rem; /* 4.4rem이 아니라 4rem 이더군요 */
      padding-bottom: 12.3rem;
    }
  `,
};
