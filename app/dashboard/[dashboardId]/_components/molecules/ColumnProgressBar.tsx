'use client';

import styled from 'styled-components';

import { useGetCardList } from '../../_hooks/useGetCardList.query';
import NumberChip from '../atoms/NumberChip';
import ProgressChip from '../atoms/ProgressChip';
import { ColumnHeaderProps } from '../organisms/ColumnHeader';

type ColumnProgressBarProps = ColumnHeaderProps;

const ColumnProgressBar = ({ columnId, columnTitle }: ColumnProgressBarProps) => {
  const { data, isSuccess, isFetched } = useGetCardList(columnId);

  return (
    <S.Box>
      <ProgressChip>{columnTitle}</ProgressChip>
      <NumberChip>{isSuccess && isFetched ? data.totalCount : 0}</NumberChip>
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
