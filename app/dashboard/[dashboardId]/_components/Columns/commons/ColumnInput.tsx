import { PropsWithChildren, useId } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

// Todo: validate 했을 때 디자인 추가 필요
// 기본적인 디자인, 틀만 완성

interface ColumnInputProps {
  placeholder: string;
  inputValue: string;
  onChange: (value: string) => void;
}

export default function ColumnInput({
  children,
  placeholder,
  onChange,
  inputValue,
}: PropsWithChildren<ColumnInputProps>) {
  const id = useId();

  return (
    <>
      <S.ColumnForm>
        <S.ColumnLabel htmlFor={id}>{children}</S.ColumnLabel>
        <S.ColumnInput
          value={inputValue}
          onChange={(e) => onChange(e.target.value)}
          id={id}
          type='text'
          placeholder={placeholder}
        />
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
    margin-bottom: 2.4rem;

    &:focus {
      outline: none;
      border: 0.1rem solid ${({ theme }) => theme.color.violet_5534DA};
    }

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.6rem;
      width: 48.4rem;
      height: 4.8rem;
      margin-bottom: 2.8rem;
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
