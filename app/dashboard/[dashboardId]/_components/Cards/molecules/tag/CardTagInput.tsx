import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import CheckCardTagInput from './CheckCardTagInput';

interface CardTagInputProps {
  id: string;
  register: any;
  errors: any;
  watch: any;
  setError: any;
  required?: boolean;
}

export default function CardTagInput({ id, register, errors, required, watch, setError }: CardTagInputProps) {
  const { isError, checkTag } = CheckCardTagInput(errors, watch, setError);

  return (
    <>
      <S.CardsInputWrapper>
        <S.CardsLabel htmlFor={id}>
          태그
          {required ? <S.Star> *</S.Star> : null}
        </S.CardsLabel>
        <S.Input
          id={id}
          type='text'
          placeholder='입력 후 Enter'
          $isError={isError}
          {...register(
            id,
            // {required: '제목 입력은 필수입니다.',}
          )}
          onBlur={checkTag}
          watch
        />
        {errors.tag && <S.ErrorMessage>{errors.tag.message}</S.ErrorMessage>}
      </S.CardsInputWrapper>
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
    /* width: 28.7rem; */
    height: 4.2rem;
    padding: 0 1.6rem;
    margin-bottom: ${({ $isError }) => ($isError ? `0.8rem` : `2.4rem`)};

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.6rem;
      /* width: 48.4rem; */
      height: 4.8rem;
      margin-bottom: 0.8rem;
    }

    &:focus {
      outline: none;
      /* border: 0.1rem solid ${({ theme }) => theme.color.violet_5534DA}; */
      border: 0.1rem solid
        ${({ theme, $isError }) => ($isError === true ? theme.color.red_D6173A : theme.color.violet_5534DA)};
    }

    &::placeholder {
      color: ${({ theme }) => theme.color.gray_9FA6B2};
      font-size: 1.4rem;

      @media ${mediaBreakpoint.tablet} {
        font-size: 1.6rem;
      }
    }
  `,

  ErrorMessage: styled.span`
    color: ${({ theme }) => theme.color.red_D6173A};
    font-size: 15px;
  `,

  CardsLabel: styled.label`
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.black_333236};
    margin-bottom: 1rem;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.8rem;
    }
  `,
  Star: styled.span`
    color: ${({ theme }) => theme.color.violet_5534DA};
  `,

  CardsInputWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2.4rem;
    @media ${mediaBreakpoint.tablet} {
      margin-bottom: 3.2rem;
    }
  `,
};
