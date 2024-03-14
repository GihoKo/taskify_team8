import React, { useState } from 'react';

import styled from 'styled-components';

import EyeOffIcon from '@public/images/icons/eye-closed.svg';
import EyeOnIcon from '@public/images/icons/eye-opened.svg';

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

const InputWrapper = styled.input`
  width: 100%;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  width: fit-content;
  padding: 0;
  position: absolute;
  top: 1.4rem;
  right: 1.6rem;
`;

export default function PasswordInput({
  value,
  onChange,
  placeholder,
  hasError = false,
  errorMessage,
  onBlur,
}: PasswordInputProps) {
  // 비밀번호 가림 여부
  const [isVisible, setIsVisible] = useState<boolean>(false);

  //   visible에 따른 타입 값
  const inputType = isVisible ? 'text' : 'password';

  return (
    <Container>
      <InputWrapper
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        hasError={hasError}
        errorMessage={errorMessage}
        onBlur={onBlur}
        type={inputType}
      />
      <Button
        type='button'
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        {isVisible ? <EyeOnIcon /> : <EyeOffIcon />}
      </Button>
    </Container>
  );
}
