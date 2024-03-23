'use client';

import styled from 'styled-components';

import Cogwheel from '@/app/dashboard/_components/atoms/Cogwheel';

import useMdoal from '@hooks/use-modal';

import ColumnProgressBar from '../molecules/ColumnProgressBar';

export interface ColumnHeaderProps {
  dashboardId?: number;
  columnId: number;
  columnTitle: string;
}

const ColumnHeader = ({ columnId, columnTitle, dashboardId }: ColumnHeaderProps) => {
  const { openModal } = useMdoal();

  const handleUpdateColumnClick = async () => {
    const UpdateColumnModal = await import('../Columns/UpdateColumnModal').then((module) => module.default);

    openModal(UpdateColumnModal, { dashboardId, columnTitle, columnId });
  };

  return (
    <S.Box>
      <ColumnProgressBar columnTitle={columnTitle} columnId={columnId} />
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
