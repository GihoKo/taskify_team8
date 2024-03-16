'use client';

import { ChangeEvent, MouseEvent, MutableRefObject } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

type RefProps = 'email' | 'nickname' | 'password' | 'passwordCheck';
type RefValue = HTMLElement | null;
type Ref = {
  [key in RefProps]: RefValue;
};

interface InputProp {
  id: string;
  value: string;
  type: string;
  name?: RefProps;
  placeholder?: string | undefined;
  eyeButton?: boolean;
  eyesValue?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onEyesClick: (e: MouseEvent<HTMLButtonElement>) => void;
  inputRef?: MutableRefObject<Ref>;
}

export default function Input({
  placeholder,
  id,
  name = 'email',
  value,
  onChange,
  eyeButton,
  eyesValue,
  type = 'text',
  onEyesClick,
  inputRef,
}: InputProp) {
  return (
    <S.Wrapper>
      <S.InputField
        ref={(el) => {
          if (!inputRef) return;

          inputRef.current[name] = el;
        }}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {eyeButton && (
        <S.EyeButton onClick={onEyesClick} type='button'>
          <Image src={`@public/images/icons/icon-eyes${eyesValue ? 'On' : 'Off'}.svg`} width={18} height={18} alt='' />
        </S.EyeButton>
      )}
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.input`
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 1.4rem 1.6rem;
    border: 1px solid ${({ theme }) => theme.color.gray_D9D9D9};
    position: relative;
    width: 100%;
    height: 4.8rem;
    background: ${({ theme }) => theme.color.white_FFFFFF};
    border-radius: 0.6rem;

    &:focus-within {
      border: 0.1rem solid ${({ theme }) => theme.color.violet_5534DA};
    }
    @media ${mediaBreakpoint.tablet} {
      padding-top: 2.3rem;
      padding-bottom: 2.3rem;
    }
    @media ${mediaBreakpoint.pc} {
      padding-top: 2.4rem;
      padding-bottom: 2.4rem;
    }
  `,
  EyeButton: styled.button`
    width: 1.8rem;
    height: 1.8rem;
  `,
  InputField: styled.input`
    flex: 1;
    border: none;
    width: 100%;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.color.black_333236};

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.color.gray_9FA6B2};
    }
  `,
};
