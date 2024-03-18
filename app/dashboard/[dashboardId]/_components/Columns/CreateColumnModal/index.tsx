'use client';

<<<<<<< Updated upstream
=======
import { useState } from 'react';

>>>>>>> Stashed changes
import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import ColumnButton from '../commons/ColumnButton';
import ColumnButtonsWrap from '../commons/ColumnButtonWrap';
import ColumnInput from '../commons/ColumnInput';
<<<<<<< Updated upstream
import CreateModalTitle from '../commons/ColumnModalTitile';

export default function CreateColumnModal() {
  return (
    <S.CreateColumnBox>
      <CreateModalTitle title='새 컬럼 생성' />
      <ColumnInput />
      <ColumnButtonsWrap>
        <ColumnButton text='취소' />
        <ColumnButton text='생성' />
=======
import CreateModalTitle from '../commons/ColumnModalTitle';

export default function CreateColumnModal() {
  const [inputValue, setInputValue] = useState('');

  return (
    <S.CreateColumnBox>
      <CreateModalTitle title='새 컬럼 생성' />
      <ColumnInput inputValue={inputValue} onChange={setInputValue} placeholder='컬럼 제목을 입력해주세요' />
      <ColumnButtonsWrap>
        <ColumnButton>취소</ColumnButton>
        <ColumnButton>생성</ColumnButton>
>>>>>>> Stashed changes
      </ColumnButtonsWrap>
    </S.CreateColumnBox>
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
