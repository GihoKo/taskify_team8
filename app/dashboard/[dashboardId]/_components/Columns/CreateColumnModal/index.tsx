'use client';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import ColumnButton from '../commons/ColumnButton';
import ColumnInput from '../commons/ColumnInput';
import CreateModalTitle from '../commons/ColumnModalTitile';

export default function CreateColumnModal() {
  return (
    <S.CreateColumnBox>
      <CreateModalTitle>새 컬럼 생성</CreateModalTitle>
      <ColumnInput />
      <S.ColumnButtonContainer>
        <ColumnButton text='취소' />
        <ColumnButton text='생성' />
      </S.ColumnButtonContainer>
    </S.CreateColumnBox>
  );
}

const S = {
  ColumnButtonContainer: styled.div`
    display: flex;
    gap: 1.1rem;

    @media ${mediaBreakpoint.tablet} {
      gap: 1.2rem;
      justify-content: flex-end;
    }
  `,
  CreateColumnBox: styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.8rem 2rem;
    width: 32.7rem;
    height: 24.1rem;
    border: 1px solid black;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.color.white_FFFFFF};

    @media ${mediaBreakpoint.tablet} {
      width: 54rem;
      height: 27.6rem;
      padding: 3.2rem 2.8rem;
    }
  `,
};
