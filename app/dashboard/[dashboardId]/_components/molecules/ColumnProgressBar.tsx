'use client';

import { InfiniteData, useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';

import { GetCardListResponse } from '@apis/cards/getCardList';
import { cardsKeys } from '@queries/keys/cardsKeys';

import NumberChip from '../atoms/NumberChip';
import ProgressChip from '../atoms/ProgressChip';
import { ColumnHeaderProps } from '../organisms/ColumnHeader';

type ColumnProgressBarProps = ColumnHeaderProps;

const ColumnProgressBar = ({ columnId, columnTitle }: ColumnProgressBarProps) => {
  const queryClient = useQueryClient();

  const cardListData = queryClient.getQueryData<InfiniteData<GetCardListResponse, number>>(
    cardsKeys.cardList(columnId),
  );

  return (
    <S.Box>
      <ProgressChip>{columnTitle}</ProgressChip>
      {/* api 요청해보면 totalcount보다 1개 적음. cursor 방식 */}
      <NumberChip>
        {cardListData && cardListData.pages[cardListData.pages.length - 1].totalCount
          ? cardListData.pages[cardListData.pages.length - 1].totalCount - 1
          : 0}
      </NumberChip>
    </S.Box>
  );
};

export default ColumnProgressBar;

const S = {
  Box: styled.section`
    display: flex;
    column-gap: 1.2rem;
    align-items: center;
  `,
};
