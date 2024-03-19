'use client';

import styled from 'styled-components';

import Cogwheel from '@/app/dashboard/_components/atoms/Cogwheel';

import { useModal } from '@hooks/use-modal/useModal';

import ColumnProgressBar from '../molecules/ColumnProgressBar';

const ColumnHeader = () => {
  const { openModal } = useModal();

  const handleUpdateColumnClick = async () => {
    const UpdateColumnModal = await import('../Columns/UpdateColumnModal').then((module) => module.default);

    openModal(UpdateColumnModal);
  };

  return (
    <S.Box>
      <ColumnProgressBar />
      <Cogwheel onClick={handleUpdateColumnClick} />
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
