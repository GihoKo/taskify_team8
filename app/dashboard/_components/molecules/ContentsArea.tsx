'use client';

import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';
import { sidebarWidth } from '@styles/sidebarWidth';

type ContentsAreaProps = PropsWithChildren;

const ContentsArea = ({ children }: ContentsAreaProps) => {
  return <S.Area>{children}</S.Area>;
};

export default ContentsArea;

const S = {
  Area: styled.div`
    min-width: fit-content;
    width: 100%;
    min-height: 100vh;
    max-height: max-content;
    height: 100%;

    display: flex;
    flex-direction: column;

    position: relative;

    @media ${mediaBreakpoint.pc} {
      width: calc(100% - ${sidebarWidth.onPc});
    }
  `,
};
