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
    width: 100%;
    height: 100%;

    background: ${({ theme }) => theme.color.gray_FAFAFA};
  `,
};
