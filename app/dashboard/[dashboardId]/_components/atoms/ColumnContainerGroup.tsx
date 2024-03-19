'use client';

import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';
import { dashboardNavbarHeight } from '@styles/navbarHeight';

type ColumnContainerGroupProps = PropsWithChildren;

const ColumnContainerGroup = ({ children }: ColumnContainerGroupProps) => {
  return <S.Box>{children}</S.Box>;
};

export default ColumnContainerGroup;

const S = {
  Box: styled.main`
    display: flex;
    flex-direction: column;

    width: 100%;
    /* height: 100%; */ /* TODO: 화면 높이에서 navbar 크기를 빼야 함 */
    height: calc(100% - ${dashboardNavbarHeight.onMobile});

    @media ${mediaBreakpoint.tablet} {
      width: 100%;

      height: calc(100% - ${dashboardNavbarHeight.onTablet}); /* tablet이랑 pc는 navbar 같은 높이 */
    }

    @media ${mediaBreakpoint.pc} {
      flex-direction: row;

      width: fit-content;
    }
  `,
};
