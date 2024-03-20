'use client';

import { PropsWithChildren } from 'react';

import styled from 'styled-components';

type PageProps = PropsWithChildren;
const Page = ({ children }: PageProps) => {
  return <S.Page>{children}</S.Page>;
};

export default Page;

const S = {
  Page: styled.div`
    display: flex;

    min-width: fit-content;
    width: 100%;
    min-height: 100vh;
    max-height: max-content;
    height: 100%;

    background: ${({ theme }) => theme.color.gray_FAFAFA};
  `,
};
