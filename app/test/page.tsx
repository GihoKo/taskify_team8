'use client';

import styled from 'styled-components';

import { useModal } from '@hooks/use-modal/useModal';

export default function TestModal() {
  const { openModal } = useModal();

  const handleCardClick = async () => {
    const CreateColumnModal = await import('../dashboard/[dashboardId]/_components/Columns/CreateColumnModal').then(
      (module) => module.default,
    );

    openModal(CreateColumnModal);
  };

  return <S.Box onClick={handleCardClick}>hi</S.Box>;
}

const S = {
  Box: styled.section`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 100px;
  `,
};
