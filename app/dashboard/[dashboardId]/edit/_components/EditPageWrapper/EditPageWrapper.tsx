'use client';

import { PropsWithChildren } from 'react';

import styled from 'styled-components';

type EditPageWrapperProps = PropsWithChildren;

const EditPageWrapper = ({ children }: EditPageWrapperProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default EditPageWrapper;

const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;

    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    /* ::-webkit-scrollbar:horizontal {
      height: 0;
      width: 0;
      display: none;
    }

    ::-webkit-scrollbar-thumb:horizontal {
      display: none;
    } */
  `,
};
