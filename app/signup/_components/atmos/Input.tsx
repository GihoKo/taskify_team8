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
    border: 0.1rem solid $gray_d9d9d9;
    border-radius: 0.8rem;
    padding: 1.5rem 1.6rem;
    outline: none;

    font-size: $font_size_medium;
    color: $on_surface;
    font-weight: 400;

    transition: border-color 0.2s ease-in-out;

    &::placeholder {
      color: $hint_color;
    }

    &:focus {
      border-color: $primary;
    }

    &:disabled {
      color: $hint_color;
      background: $surface_container;
    }

    &.error {
      border-color: $error;
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
    color: $error;
    font-size: $font_size_small;
    font-weight: 400;
  `,
};
