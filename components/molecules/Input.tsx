import React, { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

import Image from 'next/image';
import styled from 'styled-components';

interface FormValues {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
  newPassword: string;
  newPasswordCheck: string;
}

interface InputProps {
  title?: string;
  placeholder?: string;
  data?: string;
  errorMessage?: boolean;
  handleBlur?: React.FocusEventHandler<HTMLInputElement>;
  value?: string;
  hookform?: ReturnType<UseFormRegister<FormValues>>;
  name?: string;
  disabled?: boolean;
  defaultValue?: string;
  handleFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function Input({
  data,
  placeholder,
  title,
  errorMessage,
  handleBlur,
  value,
  hookform,
  name,
  disabled,
  defaultValue,
  handleFocus,
}: InputProps) {
  const [pwd, setPwd] = useState<boolean>(true);

  const handlePwd = () => {
    setPwd((prev) => !prev);
  };

  return (
    <>
      {data !== 'pwd' ? (
        <S.inputWrap>
          <S.label htmlFor={data}>{title}</S.label>
          <S.input
            {...hookform}
            onBlur={handleBlur}
            type={data === '이메일' ? 'email' : 'text'}
            id={data}
            placeholder={placeholder}
            value={value}
            onFocus={handleFocus}
            $errorMessage={!!errorMessage}
            name={name}
            disabled={disabled}
            defaultValue={defaultValue}
          />
          {errorMessage && data === '이메일' && <S.errorMessage>{data} 형식으로 작성해 주세요.</S.errorMessage>}
          {errorMessage && data === '닉네임' && <S.errorMessage>10자 이하로 작성해주세요.</S.errorMessage>}
        </S.inputWrap>
      ) : (
        <S.inputWrap>
          <S.label htmlFor={data + title}>{title}</S.label>
          <S.inputInner>
            <S.input
              {...hookform}
              type={pwd ? 'password' : 'text'}
              id={data + title}
              placeholder={placeholder}
              onBlur={handleBlur}
              value={value}
              onFocus={handleFocus}
              $errorMessage={!!errorMessage}
              name={name}
            />
            <S.imageWrap onClick={handlePwd}>
              {pwd ? (
                <Image src={'/images/icons/icon-eyesOff.svg'} alt='off' fill />
              ) : (
                <Image src={'/images/icons/icon-eyesOn.svg'} alt='on' fill />
              )}
            </S.imageWrap>
          </S.inputInner>
          {errorMessage &&
            (title === '비밀번호' ? (
              <S.errorMessage>8자 이상 입력해 주세요.</S.errorMessage>
            ) : (
              <S.errorMessage>비밀번호를 확인해 주세요.</S.errorMessage>
            ))}
        </S.inputWrap>
      )}
    </>
  );
}

const S = {
  inputWrap: styled.div`
    width: 100%;
    max-width: 52rem;
    height: 7.7rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  `,
  inputInner: styled.div`
    position: relative;
  `,
  label: styled.label`
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 1.6rem;
    font-weight: 400;
  `,
  input: styled.input<{ $errorMessage: boolean }>`
    width: 100%;
    padding: 15px 16px;
    border-radius: 8px;
    border: ${(props) =>
      props.$errorMessage ? '1px solid var(--red-D6173A, #D6173A)' : '1px solid var(--violet-5534DA), #5534DA'};
    background: ${({ theme }) => theme.color.white_FFFFFF};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: normal;
  `,
  imageWrap: styled.div`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 1.2rem;
    right: 1.6rem;
    cursor: pointer;
  `,
  errorMessage: styled.div`
    color: ${({ theme }) => theme.color.red_D6173A};
    font-size: 1.4rem;
  `,
};
