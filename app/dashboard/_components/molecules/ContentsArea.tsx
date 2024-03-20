'use client';

import { PropsWithChildren } from 'react';

import styled from 'styled-components';

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
  `,
};
