import { InfiniteData, useQuery } from '@tanstack/react-query';

import { GetCardListResponse } from '@apis/cards/getCardList';
import { cardsKeys } from '@queries/keys/cardsKeys';

interface CardTotalCount {
  totalCount: number;
}

export const useObserveCardListQuery = (columnId: number) => {
  // enabled: false로 useQuery가 queryFn을 호출하지 않도록 설정.
  // queryFn 필드가 없어도 queryKey를 통해 캐시를 찾아서 반환.
  return useQuery<InfiniteData<GetCardListResponse>, Error, CardTotalCount>({
    queryKey: cardsKeys.cardList(columnId),
    enabled: false,
    select: (data) => {
      return {
        totalCount: data.pages[data.pages.length - 1].totalCount,
      };
    },
  });
};
