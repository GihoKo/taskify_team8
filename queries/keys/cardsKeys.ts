import { getCardList, GetCardListParams } from '@apis/cards/getCardList';

export const cardsKeys = {
  masterKey: () => ['cards'] as const,
  cardList: (columnId: number) => [...cardsKeys.masterKey(), columnId, 'cardList'] as const,
};

export const cardsQueryOptions = {
  masterKey: () => ({
    queryKey: cardsKeys.masterKey(),
  }),
  cardList: ({ columnId, size }: GetCardListParams) => ({
    queryKey: cardsKeys.cardList(columnId),
    // 0 이면 null
    queryFn: ({ pageParam }: { pageParam: number }) => getCardList({ columnId, cursorId: pageParam || null, size }),
    gcTime: 1000 * 60 * 5, // 5분
    staleTime: 1000 * 60 * 1, // 1분 ---> 0으로 변경
  }),
};
