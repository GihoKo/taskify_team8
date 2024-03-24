'use client';

import styled from 'styled-components';

import Spinner from '@components/atoms/Spinner';

import { useGetCardList } from '../../_hooks/useGetCardList.query';
import NumberChip from '../atoms/NumberChip';
import ProgressChip from '../atoms/ProgressChip';
import { ColumnHeaderProps } from '../organisms/ColumnHeader';

type ColumnProgressBarProps = ColumnHeaderProps;

const ColumnProgressBar = ({ columnId, columnTitle }: ColumnProgressBarProps) => {
  // const queryClient = useQueryClient();

  const { data, status } = useGetCardList(columnId);
  // const cardListData = queryClient.getQueryData<InfiniteData<GetCardListResponse, number>>(
  //   cardsKeys.cardList(columnId),
  // );

  if (status === 'error') {
    return null;
  }

  console.log(cardListData);

  return (
    <S.Box>
      <ProgressChip>{columnTitle}</ProgressChip>
      {/* api 요청해보면 totalcount보다 1개 적음. cursor 방식 */}
      {status === 'pending' ? (
        <NumberChip>
          <Spinner size='100%' />
        </NumberChip>
      ) : (
        <NumberChip>{data.totalCount ? data.totalCount - 1 : 0}</NumberChip>
        // <NumberChip>
        //   {cardListData && cardListData.pages[cardListData.pages.length - 1].totalCount
        //     ? cardListData.pages[cardListData.pages.length - 1].totalCount - 1
        //     : 0}
        // </NumberChip>
      )}
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
