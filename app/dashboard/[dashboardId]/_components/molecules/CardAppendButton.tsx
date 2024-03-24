'use client';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import { useModal } from '@hooks/use-modal/useModal';

import PlusShapeIcon from '../atoms/PlusShapeIcon';

interface CardAppendButtonProps {
  columnId: number;
  dashboardId: number;
}

const CardAppendButton = ({ columnId, dashboardId }: CardAppendButtonProps) => {
  const { openModal } = useModal();

  const handleCardAppendButtonClick = async () => {
    const CreateCardsModal = await import('../Cards/CreateCardsModal.').then((module) => module.default);

    openModal(CreateCardsModal, { dashboardId, columnId });
  };

  return (
    <S.Box type='button' onClick={handleCardAppendButtonClick}>
      <PlusShapeIcon />
    </S.Box>
  );
};

export default CardAppendButton;

const S = {
  Box: styled.button`
    width: 100%;
    height: 3.2rem;
    padding: 0;
    flex-shrink: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 0.6rem;
    border: 1px solid ${({ theme }) => theme.color.gray_D9D9D9};
    background: ${({ theme }) => theme.color.white_FFFFFF};

    cursor: pointer;

    position: sticky;
    top: 0;
    z-index: ${({ theme }) => theme.zIndex.floatingButton};

    @media ${mediaBreakpoint.tablet} {
      height: 4rem;
    }
  `,
};
