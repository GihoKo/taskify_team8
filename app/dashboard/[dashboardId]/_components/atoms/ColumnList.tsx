'use client';

import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

type ColumnContainerGroupProps = PropsWithChildren;

const ColumnContainerGroup = ({ children }: ColumnContainerGroupProps) => {
  return <S.Box>{children}</S.Box>;
};

export default ColumnContainerGroup;

const S = {
  Box: styled.article`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    @media ${mediaBreakpoint.tablet} {
      width: 100%;
    }

    @media ${mediaBreakpoint.pc} {
      flex-direction: row;

      width: fit-content;
    }
  `,
};
