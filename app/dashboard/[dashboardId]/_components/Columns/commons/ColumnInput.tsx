import { PropsWithChildren, useId } from 'react';
import { useForm } from 'react-hook-form';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

interface ColumnInputProps {
  placeholder: string;
  inputValue: string;
  onChange: (value: string) => void;
}

type FormValues = {
  title: string;
};

export default function ColumnInput({
  children,
  placeholder,
  onChange,
  inputValue,
}: PropsWithChildren<ColumnInputProps>) {
  const id = useId();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    onChange(data.title);
    console.log('Form submitted.', data);
  };

  return (
    <>
      <S.ColumnForm onSubmit={handleSubmit(onSubmit)} noValidate>
        <S.ColumnLabel htmlFor={id}>{children}</S.ColumnLabel>
        <S.ColumnInput
          value={inputValue}
          id={id}
          type='text'
          placeholder={placeholder}
          {...register('title', {
            required: '제목을 입력해주세요',
          })}
        />
        <S.InputError>{errors.title?.message}</S.InputError>
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
  InputError: styled.span`
    color: ${({ theme }) => theme.color.red_D6173A};
    border: 1px solid black;
  `,
};
