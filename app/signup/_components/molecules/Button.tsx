'use client';

import React, { MouseEventHandler, ReactNode } from 'react';

import styled from 'styled-components';

export type ButtonProps = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ children, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  width: 100%;
  padding: 1.4rem 0;
  text-align: center;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-style: normal;
  line-height: normal;
  background-color: ${({ theme }) => theme.color.violet_5534DA};
  color: ${({ theme }) => theme.color.black_333236};
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: ${({ theme }) => theme.color.white_FFFFFF};
    color: ${({ theme }) => theme.color.black_333236};
  }
`;
