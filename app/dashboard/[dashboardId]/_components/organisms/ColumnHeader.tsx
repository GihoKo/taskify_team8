'use client';

import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import Cogwheel from '@/app/dashboard/_components/atoms/Cogwheel';

import useMdoal from '@hooks/use-modal';

import ColumnProgressBar from '../molecules/ColumnProgressBar';

type ColumnHeaderProps = PropsWithChildren<{ dashboardId: number }>;

const ColumnHeader = ({ dashboardId }: ColumnHeaderProps) => {
  const { openModal } = useMdoal();

  const handleUpdateColumnClick = async () => {
    const UpdateColumnModal = await import('../Columns/UpdateColumnModal').then((module) => module.default);

    openModal(UpdateColumnModal, { dashboardId, currentColumnTitle: 'Done' });
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
