import { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute, KeyboardEventHandler } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

export type InputProps = {
  value: string | number;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  onChange: ChangeEventHandler<HTMLInputElement>;
  hasError?: boolean;
  isModal?: boolean;
  errorMessage?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  name?: string;
  disabled?: boolean;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
};

export function Input({
  type = 'text',
  value,
  onChange,
  placeholder,
  hasError = false,
  isModal = false,
  errorMessage,
  onBlur,
  name,
  disabled = false,
  onKeyDown,
}: InputProps) {
  return (
    <S.Container>
      <S.InputField
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        error={hasError}
        disabled={disabled}
      />
      {hasError && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Container>
  );
}

const S = {
  InputField: styled.div`
    width: 100%;
    border: 0.1rem solid ${({ theme }) => theme.color.gray_D9D9D9};
    border-radius: 0.8rem;
    padding: 1.5rem 1.6rem;
    outline: none;

    font-size: 1.6rem;
    color: ${({ theme }) => theme.color.black_333236};
    font-weight: 400;

    &::placeholder {
      color: ${({ theme }) => theme.color.gray_9FA6B2};
    }

    &:focus {
      border-color: ${({ theme }) => theme.color.violet_5534DA};
    }

    &:disabled {
      color: ${({ theme }) => theme.color.gray_9FA6B2};
      background: ${({ theme }) => theme.color.white_FFFFFF};
    }

    &.error {
      border-color: ${({ theme }) => theme.color.red_D6173A};
    }

    @media ${mediaBreakpoint.tablet} {
      margin-top: 1rem;
    }

    @media ${mediaBreakpoint.tablet} {
      margin-top: 1.2rem;
    }
  `,

  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    @media ${mediaBreakpoint.tablet} {
      margin-top: 1rem;
    }

    @media ${mediaBreakpoint.tablet} {
      margin-top: 1.2rem;
    }
  `,
  ErrorMessage: styled.div`
    color: ${({ theme }) => theme.color.red_D6173A};
    font-size: 1.4rem;
    font-weight: 400;
  `,
};
