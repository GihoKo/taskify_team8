'use client';

import { PropsWithChildren } from 'react';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import ArrowLeftIcon from '../ArrowLeftIcon';

type ArrowLeftIconButtonProps = PropsWithChildren;

const ArrowLeftIconButton = ({ children }: ArrowLeftIconButtonProps) => {
  // @see https://nextjs.org/docs/app/api-reference/functions/use-params
  const { dashboardId } = useParams<{ dashboardId: string }>();

  return (
    <S.Button type='button' href={`/dashboard/${dashboardId}`}>
      <ArrowLeftIcon />
      {children}
    </S.Button>
  );
};

export default ArrowLeftIconButton;

const S = {
  Button: styled(Link)`
    cursor: pointer;

    text-decoration: none;

    display: flex;
    align-items: flex-start; /* 텍스트가 여백 남기고 위에 붙어있음 */
    column-gap: 0.6rem;
    width: fit-content;

    color: ${({ theme }) => theme.color.black_333236};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: normal;

    padding: 0;
    border: none;
    background-color: transparent;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.6rem;
    }
  `,
};
