'use client';

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

export interface AppendedBaseInputProps {
  isError?: boolean;
}

export interface BaseInputProps extends ComponentPropsWithoutRef<'input'>, AppendedBaseInputProps {}

export type BaseInputComponentType = typeof BaseInput;

const BaseInput = forwardRef<ElementRef<'input'>, BaseInputProps>(({ isError, ...rest }, ref) => {
  return <S.Input ref={ref} $isError={isError} {...rest} />;
});

BaseInput.displayName = 'BaseInput';

export default BaseInput;

const S = {
  Input: styled.input<{ $isError?: boolean }>`
    width: 100%;
    padding: 1.3rem 1.6rem 1.2rem;

    outline: none;

    color: ${({ theme: { color } }) => color.black_333236};
    font-size: 1.4rem;
    font-weight: 400;
    line-height: normal;

    border-radius: 0.6rem;
    border: 1px solid ${({ theme: { color }, $isError }) => ($isError ? color.red_D6173A : color.gray_D9D9D9)};
    background: ${({ theme: { color } }) => color.white_FFFFFF};

    &:focus {
      border-color: ${({ theme }) => theme.color.violet_5534DA};
    }

    @media ${mediaBreakpoint.tablet} {
      padding: 1.5rem 1.6 1.4rem;

      font-size: 1.6rem;
    }
  `,
};
