'use client';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

export type InputType = 'text' | 'email' | 'datetime-local' | 'textarea';

interface CardsInputProps {
  id: string;
  inputType: InputType;
  placeHolder: string;
}

export default function Input({ id, inputType, placeHolder }: CardsInputProps) {
  switch (inputType) {
    case 'textarea':
      return <S.CardsTextarea id={id} placeholder={placeHolder} />;
    default:
      return <S.CardsInput id={id} placeholder={placeHolder} />;
  }
}

const S = {
  CardsInput: styled.input`
    border: 0.1rem solid ${({ theme }) => theme.color.gray_D9D9D9};
    border-radius: 0.6rem;
    height: 4.2rem;
    padding: 0 1.6rem;

    color: ${({ theme }) => theme.color.black_333236};
    font-size: 1.4rem;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.6rem;
      height: 4.8rem;
    }
    &:focus {
      outline: none;
      border: 0.1rem solid ${({ theme }) => theme.color.violet_5534DA};
    }

    &::placeholder {
      color: ${({ theme }) => theme.color.gray_9FA6B2};
      font-size: 1.4rem;

      @media ${mediaBreakpoint.tablet} {
        font-size: 1.6rem;
      }
    }
  `,

  CardsTextarea: styled.textarea`
    resize: none;
    outline: none;
    border: 0.1rem solid ${({ theme }) => theme.color.gray_D9D9D9};
    border-radius: 0.6rem;
    height: 8.4rem;
    width: 100%;
    padding: 1.3rem 1.6rem;
    @media ${mediaBreakpoint.tablet} {
      height: 9.6rem;
      padding: 1.5rem 1.6rem;
    }

    &:focus {
      outline: none;
      border: 0.1rem solid ${({ theme }) => theme.color.violet_5534DA};
    }

    &::placeholder {
      color: ${({ theme }) => theme.color.gray_9FA6B2};
      font-size: 1.4rem;

      @media ${mediaBreakpoint.tablet} {
        font-size: 1.6rem;
      }
    }
  `,
};
