'use client';

import { useInfiniteQuery } from '@tanstack/react-query';

import { GetCardListParams } from '@apis/cards/getCardList';
import { cardsQueryOptions } from '@queries/keys/cardsKeys';

export const useGetCardListOnInfiniteScroll = ({ columnId, size = 5 }: GetCardListParams) => {
  return useInfiniteQuery({
    ...cardsQueryOptions.cardList({ columnId, size }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.cursorId;
    },
    select: (data) => {
      // pages 프롭은 data
      // group은 pages의 인덱스(= 이전의 response 객체)

      return {
        pages: data?.pages?.flatMap((page) => {
          return page?.cards;
        }),
        pageParams: data?.pageParams,
        totalCount: data?.pages?.[data.pages.length - 1].totalCount,
      };
    },
    refetchOnMount: 'always',
  });
};
