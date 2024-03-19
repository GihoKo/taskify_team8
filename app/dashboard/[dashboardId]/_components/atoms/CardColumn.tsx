'use client';

import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

type CardColumnProps = PropsWithChildren;

const CardColumn = ({ children }: CardColumnProps) => {
  return <S.Container>{children}</S.Container>;
};

export default CardColumn;

const S = {
  Container: styled.section`
    width: 100%;
    max-height: 40.4rem;

    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    position: relative;

    overflow-y: scroll;
    overflow-x: clip;

    &::-webkit-scrollbar {
      /* position: absolute; */
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgb(57 158 238 / 80%); /* 스크롤바 색상 */
      border-radius: 10px; /* 스크롤바 둥근 테두리 */
    }

    &::-webkit-scrollbar-track {
      background: rgb(36 204 216 / 49%); /*스크롤바 뒷 배경 색상*/
      border-radius: 10px;
    }

    @media ${mediaBreakpoint.tablet} {
      row-gap: 1.6rem;

      max-height: 25.8rem;
    }

    @media ${mediaBreakpoint.pc} {
      /* max-height: 94.2rem; */
      /* max-height: 88.6rem; */
      /* max-height: calc(100vh - 13.8rem); */
      max-height: calc(100vh - 13.8rem - 3rem); /* 30rem: bottom scroll-bar width */
    }
  `,
};
