'use client';

import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import withAuth from '@components/util/withAuth';

type PageProps = PropsWithChildren;
const Page = ({ children }: PageProps) => {
  console.log('page!!');

  return <S.Page>{children}</S.Page>;
};

export default withAuth(Page);

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
