'use client';

import { PropsWithChildren, useEffect, useRef } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import { useInView } from '@hooks/useInView';

import { useGetCardListOnInfiniteScroll } from '../../_hooks/useGetCardListOnInfiniteScroll.query';
import CardAppendButton from '../molecules/CardAppendButton';
import Card from '../organisms/Card';

type CardColumnBodyProps = PropsWithChildren<{ columnId: number }>;

const CardColumnBody = ({ columnId }: CardColumnBodyProps) => {
  const rootRef = useRef<HTMLElement>(null);

  const { intersectionObserveTargetRef, isIntersecting } = useInView<HTMLDivElement>({
    root: rootRef.current,
    rootMargin: '0px 0px 500px 0px',
  });

  const { data, fetchNextPage, hasNextPage } = useGetCardListOnInfiniteScroll({
    columnId,
  });

  useEffect(() => {
    if (isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  }, [isIntersecting, hasNextPage, fetchNextPage]);

  return (
    <S.Container ref={rootRef}>
      <CardAppendButton />
      {data &&
        data.pages.length > 0 &&
        data.pages.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
      <S.Threshold ref={intersectionObserveTargetRef} />
    </S.Container>
  );
};

export default CardColumnBody;

const S = {
  Container: styled.section`
    width: 100%;
    max-height: 40.4rem;

    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    position: relative;

    /* overflow-y: scroll; */
    overflow-y: auto;
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
  Threshold: styled.div`
    flex-shrink: 0;
    height: 1px;
  `,
};
