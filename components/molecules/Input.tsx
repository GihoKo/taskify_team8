import React, { useState } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

interface InputProps {
  title?: string;
  placeholder?: string;
  data?: string;
  wrong?: boolean;
  handleBlur?: any;
  value?: string;
  hookform?: any;
  name?: string;
  disabled?: boolean;
  defaultValue?: string;
  handleFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function Input({
  data,
  placeholder,
  title,
  wrong,
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
            wrong={wrong}
            name={name}
            disabled={disabled}
            defaultValue={defaultValue}
          />
          {wrong && data === '이메일' && <S.wrong>{data} 형식으로 작성해 주세요.</S.wrong>}
          {wrong && data === '닉네임' && <S.wrong>10자 이하로 작성해주세요.</S.wrong>}
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
              wrong={wrong}
              name={name}
            />
            <S.imageWrap onClick={handlePwd}>
              {pwd ? (
                <Image src={'/images/visibilityOff.svg'} alt='off' fill />
              ) : (
                <Image src={'/images/visibilityOn.svg'} alt='on' fill />
              )}
            </S.imageWrap>
          </S.inputInner>
          {wrong &&
            (title === '비밀번호' ? (
              <S.wrong>8자 이상 입력해 주세요.</S.wrong>
            ) : (
              <S.wrong>비밀번호를 확인해 주세요.</S.wrong>
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
    color: var(--black-333236);
    font-size: 1.6rem;
    font-weight: 400;
  `,
  input: styled.input<{ wrong: boolean }>`
    width: 100%;
    padding: 15px 16px;
    border-radius: 8px;
    border: ${(props) => (props.wrong ? '1px solid var(--red-D6173A)' : '1px solid var(--violet-5534DA)')};
    background: var(--white-FFFFFF);
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
  wrong: styled.div`
    color: var(--red-D6173A);
    font-size: 1.4rem;
  `,
};
