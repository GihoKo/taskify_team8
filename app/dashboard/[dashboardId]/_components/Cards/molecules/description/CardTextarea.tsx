import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import CheckCardTextArea from './CheckCardTextarea';

interface CardTextAreaProps {
  id: string;
  register: any;
  errors: any;
  watch: any;
  setError: any;
  required?: boolean;
}

export default function CardTextArea({ id, register, errors, required, setError, watch }: CardTextAreaProps) {
  const { isError, checkTextArea } = CheckCardTextArea(errors, watch, setError);

  return (
    <>
      <S.CardsInputWrapper>
        <S.CardsLabel htmlFor={id}>
          설명
          {required ? <S.Star> *</S.Star> : null}
        </S.CardsLabel>
        <S.CardsTextarea
          id={id}
          placeholder='설명을 입력해 주세요'
          $isError={isError}
          {...register(id, {
            required: '설명은 필수입니다.',
          })}
          onBlur={checkTextArea}
          watch
        />
        {errors.description && <S.ErrorMessage>{errors.description.message}</S.ErrorMessage>}
      </S.CardsInputWrapper>
    </>
  );
}

/* color: ${(props) => (props.$isError === false ? 'black' : 'red')}; */

const S = {
  CardsTextarea: styled.textarea<{ $isError: boolean }>`
    resize: none;
    outline: none;
    color: ${({ theme }) => theme.color.black_333236};
    border: 0.1rem solid
      ${({ theme, $isError }) => ($isError === true ? theme.color.red_D6173A : theme.color.gray_D9D9D9)};
    border-radius: 0.6rem;
    font-size: 1.4rem;
    /* width: 28.7rem; */
    height: 8.4rem;
    padding: 1.3rem 1.6rem;
    margin-bottom: ${({ $isError }) => ($isError ? `0.8rem` : `2.4rem`)};

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.6rem;
      /* width: 48.4rem; */
      height: 9.6rem;
      padding: 1.5rem 1.6rem;
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
