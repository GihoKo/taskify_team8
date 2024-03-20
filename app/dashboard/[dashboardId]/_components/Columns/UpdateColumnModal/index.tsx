'use client';

import { useState } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import { useCloseModal } from '@hooks/use-modal';
import { ModalComponentProps } from '@hooks/use-modal/types';

import ColumnButton from '../commons/ColumnButton';
import ColumnInput from '../commons/ColumnInput';
import CreateModalTitle from '../commons/ColumnModalTitle';
import ModalDimmed from '../commons/ModalDimmed';
import DeleteColumnModal from '../DeleteColumnModal';

type UpdateColumnModalProps = {
  currentColumnTitle: string;
};

export default function UpdateColumnModal({
  closeModal,
  modalRef,
  submitModal,
  currentColumnTitle,
}: ModalComponentProps<UpdateColumnModalProps>) {
  /**
   * 1. useModal을 사용해서 context api를 사용하는 전역 모달을 열고
   * 2. 그 전역 모달 안에서 local state를 사용함(= useCloseModal이라는 훅을 사용해서 local state를 생성함)
   * 3. local state는 local modal을 열고 닫는데 사용됨.
   *
   * 즉, UpdateColumnModal은 전역 모달인 것이고,
   * UpdateColumnModal 내부에서 local state로 관리하는 DeleteColumnModal은 지역 모달인 것임.
   * (* 스타일 변동사항 : Dimmed 영역은 공유되므로 DeleteColumnModal에서 제거하였음.)
   */

  const [inputValue, setInputValue] = useState(currentColumnTitle);

  const {
    isModalOpen: isDeleteColumnModalOpen,
    modalRef: deleteColumnModalRef,
    toggleModal: toggleDeleModal,
  } = useCloseModal(false); // Core

  const openDeleteColumnModal = () => {
    if (!isDeleteColumnModalOpen) {
      toggleDeleModal();
    }
  };

  return (
    <>
      <ModalDimmed>
        {isDeleteColumnModalOpen ? (
          <DeleteColumnModal
            isModalOpen={isDeleteColumnModalOpen}
            modalRef={deleteColumnModalRef}
            toggleModal={toggleDeleModal}
          />
        ) : (
          <S.UpdateColumnModalBox
            ref={(node) => {
              if (modalRef) modalRef.current = node;
            }}
          >
            <CreateModalTitle title='컬럼 관리' />
            <ColumnInput
              inputValue={inputValue || ''}
              onChange={setInputValue}
              placeholder='컬럼 제목을 입력해주세요.'
            />
            <S.ColumnButtonContainer>
              <S.ColumnDeleteButton onClick={openDeleteColumnModal}>삭제하기</S.ColumnDeleteButton>
              <S.ColumnButtonsWrap>
                <ColumnButton onClick={closeModal}>취소</ColumnButton>
                <ColumnButton onClick={submitModal}>변경</ColumnButton>
              </S.ColumnButtonsWrap>
            </S.ColumnButtonContainer>
          </S.UpdateColumnModalBox>
        )}
      </ModalDimmed>
    </>
  );
}

const S = {
  ColumnButtonsWrap: styled.div`
    display: flex;
    gap: 1.1rem;

    grid-area: buttons;

    @media ${mediaBreakpoint.tablet} {
      gap: 1.2rem;
      justify-content: flex-end;
    }
  `,
  ColumnDeleteButton: styled.span`
    font-size: 1.4rem;
    color: red;
    opacity: 0.5;
    grid-area: delete;
    cursor: pointer;
  `,
  ColumnButtonContainer: styled.div`
    display: grid;
    gap: 1.6rem;
    grid-template-areas:
      'delete'
      'buttons';
    @media ${mediaBreakpoint.tablet} {
      grid-template-areas: 'delete buttons';
      align-items: flex-end;
    }
  `,

  UpdateColumnModalBox: styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.8rem 2rem;
    width: 32.7rem;
    height: 27.4rem;

    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.color.white_FFFFFF};

    @media ${mediaBreakpoint.tablet} {
      width: 54rem;
      height: 27.6rem;
      padding: 3.2rem 2.8rem;
    }
  `,
};
