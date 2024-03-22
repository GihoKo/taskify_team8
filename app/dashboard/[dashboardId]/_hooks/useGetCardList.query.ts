import { useQuery } from '@tanstack/react-query';

import { getCardList } from '@apis/cards/getCardList';
import { cardsKeys } from '@queries/keys/cardsKeys';

export const useGetCardList = (columnId: number) => {
  return useQuery({
    queryKey: cardsKeys.cardList(columnId),
    queryFn: () => getCardList({ columnId }),
  });
};
