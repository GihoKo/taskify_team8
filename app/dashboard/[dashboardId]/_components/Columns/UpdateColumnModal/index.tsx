'use client';

import { useState } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import { ModalComponentProps } from '@hooks/use-modal/types';

import ColumnButton from '../commons/ColumnButton';
import ColumnInput from '../commons/ColumnInput';
import CreateModalTitle from '../commons/ColumnModalTitle';
import ModalDimmed from '../commons/ModalDimmed';

export default function UpdateColumnModal({ closeModal, modalRef, submitModal }: ModalComponentProps) {
  const [inputValue, setInputValue] = useState('');

  return (
    <ModalDimmed>
      <S.UpdateColumnModalBox
        ref={(node) => {
          if (modalRef) modalRef.current = node;
        }}
      >
        <CreateModalTitle title='컬럼 관리' />
        <ColumnInput inputValue={inputValue} onChange={setInputValue} placeholder='컬럼 제목을 입력해주세요.' />
        <S.ColumnButtonContainer>
          <S.ColumnDeleteButton>삭제하기</S.ColumnDeleteButton>
          <S.ColumnButtonsWrap>
            <ColumnButton onClick={closeModal}>취소</ColumnButton>
            <ColumnButton onClick={submitModal}>변경</ColumnButton>
          </S.ColumnButtonsWrap>
        </S.ColumnButtonContainer>
      </S.UpdateColumnModalBox>
    </ModalDimmed>
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
