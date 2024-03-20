'use client';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

interface CardsLabelProps {
  id: string;
  inputTitle: string;
  required?: boolean;
}

export default function TextLabel({ inputTitle, required = false, id }: CardsLabelProps) {
  return (
    <S.CardsLabel htmlFor={id}>
      {inputTitle}
      {required ? <S.Star> *</S.Star> : null}
    </S.CardsLabel>
  );
}

const S = {
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
};
