'use client';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

// Todo: validate 했을 때 디자인 추가 필요
// 기본적인 디자인, 틀만 완성
export default function ColumnInput() {
  return (
    <>
      <S.ColumnForm>
        <S.ColumnLabel htmlFor='column-name'>이름</S.ColumnLabel>
        <S.ColumnInput id='column-name' type='text' placeholder='새로운 프로젝트' />
      </S.ColumnForm>
    </>
  );
}

const S = {
  ColumnForm: styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,

  ColumnInput: styled.input`
    color: ${({ theme }) => theme.color.black_333236};
    border: 0.1rem solid ${({ theme }) => theme.color.gray_D9D9D9};
    border-radius: 0.6rem;
    font-size: 1.4rem;

    width: 28.7rem;
    height: 4.2rem;
    padding: 0 1.6rem;

    &:focus {
      outline: none;
      border: 0.1rem solid ${({ theme }) => theme.color.violet_5534DA};
    }

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.6rem;
      width: 48.4rem;
      height: 4.8rem;
    }
  `,
  ColumnLabel: styled.label`
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.black_333236};

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.8rem;
    }
  `,
};
