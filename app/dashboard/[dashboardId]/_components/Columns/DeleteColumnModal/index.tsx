'use client';

import { useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';

import { deleteColumn } from '@apis/columns/deleteColumn';
import { columnsQueryOptions } from '@queries/keys/columnskeys';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import ColumnButton from '../commons/ColumnButton';
import ColumnButtonsWrap from '../commons/ColumnButtonWrap';

interface DeleteColumnModalProps {
  isModalOpen: boolean;
  toggleModal: () => void;
  modalRef: React.MutableRefObject<HTMLElement | null>;
  columnId: number;
  submitModal: () => void;
  dashboardId: number;
}

export default function DeleteColumnModal({
  isModalOpen,
  modalRef,
  toggleModal,
  columnId,
  dashboardId,
  submitModal,
}: DeleteColumnModalProps) {
  const queryClient = useQueryClient();

  const removeColumn = async () => {
    try {
      const numberTypeColumndId = Number(columnId);
      await deleteColumn(numberTypeColumndId);
      queryClient.invalidateQueries(columnsQueryOptions.columnList(dashboardId));
      submitModal();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseModal = () => {
    if (isModalOpen) {
      toggleModal();
    }
  };

  return (
    <S.DeleteColumnModalBox
      ref={(node) => {
        if (modalRef) {
          modalRef.current = node;
        }
      }}
    >
      <S.DeleteColumnMessage>컬럼의 모든 카드를 삭제하시겠습니까?</S.DeleteColumnMessage>
      <ColumnButtonsWrap>
        <ColumnButton onClick={handleCloseModal}>취소</ColumnButton>
        <ColumnButton onClick={removeColumn}>삭제</ColumnButton>
      </ColumnButtonsWrap>
    </S.DeleteColumnModalBox>
  );
}

const S = {
  DeleteColumnModalBox: styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 32.7rem;
    height: 22rem;
    padding: 2.8rem 2rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.color.white_FFFFFF};

    @media ${mediaBreakpoint.tablet} {
      width: 54rem;
      height: 25rem;
      padding: 2.8rem 2.8rem;
    }
  `,
  DeleteColumnMessage: styled.div`
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.black_333236};
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${mediaBreakpoint.tablet} {
      font-size: 1.8rem;
    }
  `,
};
