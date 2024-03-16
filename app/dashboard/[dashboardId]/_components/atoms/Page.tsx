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
    flex-direction: column;
    width: 100%;
  `,
};
