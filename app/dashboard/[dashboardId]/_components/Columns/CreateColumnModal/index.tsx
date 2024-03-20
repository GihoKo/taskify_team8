'use client';

import { useState } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import { ModalComponentProps } from '@hooks/use-modal/types';

import ColumnButton from '../commons/ColumnButton';
import ColumnButtonsWrap from '../commons/ColumnButtonWrap';
import ColumnInput from '../commons/ColumnInput';
import CreateModalTitle from '../commons/ColumnModalTitle';
import ModalDimmed from '../commons/ModalDimmed';

export default function CreateColumnModal({ closeModal, modalRef, submitModal }: ModalComponentProps) {
  const [inputValue, setInputValue] = useState('');

  return (
    <ModalDimmed>
      <S.CreateColumnBox
        ref={(node) => {
          if (modalRef) modalRef.current = node;
        }}
      >
        <CreateModalTitle title='새 컬럼 생성' />
        <ColumnInput inputValue={inputValue} onChange={setInputValue} placeholder='컬럼 제목을 입력해주세요' />
        <ColumnButtonsWrap>
          <ColumnButton onClick={closeModal}>취소</ColumnButton>
          <ColumnButton onClick={submitModal}>생성</ColumnButton>
        </ColumnButtonsWrap>
      </S.CreateColumnBox>
    </ModalDimmed>
  );
}

const S = {
  CreateColumnBox: styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.8rem 2rem;
    width: 32.7rem;
    height: 24.1rem;

    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.color.white_FFFFFF};

    @media ${mediaBreakpoint.tablet} {
      width: 54rem;
      height: 27.6rem;
      padding: 3.2rem 2.8rem;
    }
  `,
  ColumnButtonContainer: styled.div`
    display: flex;
    gap: 1.1rem;

    @media ${mediaBreakpoint.tablet} {
      gap: 1.2rem;
      justify-content: flex-end;
    }
  `,
};
