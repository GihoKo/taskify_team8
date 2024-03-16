'use client';

import styled from 'styled-components';

import NumberChip from '../atoms/NumberChip';
import ProgressChip from '../atoms/ProgressChip';

const ColumnProgressBar = () => {
  return (
    <S.Box>
      <ProgressChip>To Do</ProgressChip>
      <NumberChip>2</NumberChip>
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
