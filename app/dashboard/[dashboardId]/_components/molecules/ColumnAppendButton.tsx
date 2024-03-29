'use client';

import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import { useModal } from '@hooks/use-modal/useModal';

import PlusShapeIcon from '../atoms/PlusShapeIcon';

type ColumnAppendButtonProps = PropsWithChildren<{ dashboardId: number }>;

const ColumnAppendButton = ({ children, dashboardId }: ColumnAppendButtonProps) => {
  const { openModal } = useModal();

  const handleColumnAddButtonClick = async () => {
    const CreateColumnModal = await import('../Columns/CreateColumnModal').then((module) => module.default);

    openModal(CreateColumnModal, { dashboardId });
  };

  return (
    <S.Box onClick={handleColumnAddButtonClick}>
      {children || '새로운 컬럼 추가하기'}
      <PlusShapeIcon />
    </S.Box>
  );
};

export default ColumnAppendButton;

const S = {
  Box: styled.button`
    display: flex;
    padding: 2rem 6rem;
    justify-content: center;
    align-items: center;
    column-gap: 1.2rem;

    width: 100%;
    height: 6rem;

    border-radius: 0.8rem;
    border: 1px solid ${({ theme }) => theme.color.gray_D9D9D9};
    background: ${({ theme }) => theme.color.white_FFFFFF};

    cursor: pointer;

    color: ${({ theme }) => theme.color.black_333236};
    text-align: center;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: normal;

    @media ${mediaBreakpoint.tablet} {
      height: 7rem;

      font-size: 1.8rem;
    }
  `,
};
