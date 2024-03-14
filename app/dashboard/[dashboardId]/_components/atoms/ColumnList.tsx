'use client';

import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

type ColumnListProps = PropsWithChildren;

const ColumnList = ({ children }: ColumnListProps) => {
  return <S.Box>{children}</S.Box>;
};

export default ColumnList;

const S = {
  Box: styled.article`
    display: flex;
    flex-direction: column;

    /* width: fit-content; */
    width: 100%;
    height: fit-content;

    @media ${mediaBreakpoint.tablet} {
      width: 100%;
    }

    @media ${mediaBreakpoint.pc} {
      flex-direction: row;

      width: fit-content;
      height: 100%;
      min-height: 100vh; /* TODO: 100vh - Navbarheight */
    }
  `,
};
