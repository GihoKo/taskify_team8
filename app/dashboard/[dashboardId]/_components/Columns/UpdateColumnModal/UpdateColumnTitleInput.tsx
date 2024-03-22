import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import useColumnTitleInput from './useUpdateColumnTitleInput';

interface ColumnTitleInputProps {
  id: string;
  register: any;
  errors: any;
  watch: any;
  setError: any;
  currentValue: string | undefined;
}

export default function UpdateColumnTitleInput({ id, register, errors, currentValue }: ColumnTitleInputProps) {
  const { isError, checkTitle } = useColumnTitleInput(errors);

  return (
    <>
      <S.Input
        value={currentValue}
        id={id}
        type='text'
        placeholder='컬럼 제목을 입력해주세요.'
        $isError={isError}
        {...register(id, {
          required: '제목 입력은 필수입니다.',
        })}
        onBlur={checkTitle}
        watch
      />

      {errors.title && <S.ErrorMessage>{errors.title.message}</S.ErrorMessage>}
    </>
  );
}

/* color: ${(props) => (props.$isError === false ? 'black' : 'red')}; */

const S = {
  Input: styled.input<{ $isError: boolean }>`
    color: ${({ theme }) => theme.color.black_333236};
    border: 0.1rem solid
      ${({ theme, $isError }) => ($isError === true ? theme.color.red_D6173A : theme.color.gray_D9D9D9)};
    border-radius: 0.6rem;
    font-size: 1.4rem;
    width: 28.7rem;
    height: 4.2rem;
    padding: 0 1.6rem;
    margin-bottom: ${({ $isError }) => ($isError ? `0.8rem` : `2.4rem`)};

    &:focus {
      outline: none;
      /* border: 0.1rem solid ${({ theme }) => theme.color.violet_5534DA}; */
      border: 0.1rem solid
        ${({ theme, $isError }) => ($isError === true ? theme.color.red_D6173A : theme.color.violet_5534DA)};
    }

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.6rem;
      width: 48.4rem;
      height: 4.8rem;
      margin-bottom: 0.8rem;
    }
  `,

  ErrorMessage: styled.span`
    color: ${({ theme }) => theme.color.red_D6173A};
    font-size: 15px;
  `,
};
