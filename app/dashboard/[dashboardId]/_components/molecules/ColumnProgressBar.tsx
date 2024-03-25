'use client';

import styled from 'styled-components';

import Spinner from '@components/atoms/Spinner';

import { useObserveCardListQuery } from '../../_hooks/useObserveCardListQuery.query';
import NumberChip from '../atoms/NumberChip';
import ProgressChip from '../atoms/ProgressChip';
import { ColumnHeaderProps } from '../organisms/ColumnHeader';

type ColumnProgressBarProps = ColumnHeaderProps;

const ColumnProgressBar = ({ columnId, columnTitle }: ColumnProgressBarProps) => {
  const { data, status } = useObserveCardListQuery(columnId);

  return (
    <S.Box>
      <ProgressChip>{columnTitle}</ProgressChip>
      {/* api 요청해보면 totalcount보다 1개 적음. cursor 방식 */}
      {status === 'pending' ? (
        <NumberChip>
          <Spinner size='100%' />
        </NumberChip>
      ) : (
        <NumberChip>{status === 'success' && data.totalCount ? data.totalCount : 0}</NumberChip>
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
