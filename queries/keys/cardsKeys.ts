import { getCardList, GetCardListParams } from '@apis/cards/getCardList';

export const cardsKeys = {
  masterKey: () => ['cards'] as const,
  cardList: (columnId: number) => [...cardsKeys.masterKey(), 'cardList', columnId] as const,
  infiniteCardList: (columnId: number) => [...cardsKeys.masterKey(), 'infiniteCardList', columnId] as const,
  // cardList: () => [...cardsKeys.masterKey(), 'cardList'] as const,
};

export const cardsQueryOptions = {
  masterKey: () => ({
    queryKey: cardsKeys.masterKey(),
  }),
  // cardList: ({ columnId, size }: GetCardListParams) => ({
  //   queryKey: cardsKeys.cardList(columnId),
  //   // 0 이면 null
  //   queryFn: ({ pageParam }: { pageParam: number }) => getCardList({ columnId, cursorId: pageParam || null, size }),
  //   gcTime: 1000 * 60 * 5, // 5분
  //   staleTime: 1000 * 60 * 1, // 1분
  //   // initialPageParam: 0,
  // }),
  cardList: ({ columnId, size }: GetCardListParams) => ({
    queryKey: cardsKeys.cardList(columnId),
    // 0 이면 null
    queryFn: ({ pageParam }: { pageParam: number }) => getCardList({ columnId, cursorId: pageParam || null, size }),
    // gcTime: 1000 * 60 * 5, // 5분
    // staleTime: 1000 * 60 * 1, // 1분
    // initialPageParam: 0,
  }),
  infiniteCardList: ({ columnId, size }: GetCardListParams) => ({
    queryKey: cardsKeys.infiniteCardList(columnId),
    // 0 이면 null
    queryFn: ({ pageParam }: { pageParam: number }) => getCardList({ columnId, cursorId: pageParam || null, size }),
    // gcTime: 1000 * 60 * 5, // 5분
    // staleTime: 1000 * 60 * 1, // 1분
    // initialPageParam: 0,
  }),
};
