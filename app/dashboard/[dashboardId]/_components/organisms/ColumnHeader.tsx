'use client';

import styled from 'styled-components';

import Cogwheel from '../atoms/Cogwheel';
import ColumnProgressBar from '../molecules/ColumnProgressBar';

const ColumnHeader = () => {
  return (
    <S.Box>
      <ColumnProgressBar />
      <Cogwheel />
    </S.Box>
  );
};

export default ColumnHeader;

const S = {
  Box: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  `,
};
