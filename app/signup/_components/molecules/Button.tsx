'use client';

import React, { MouseEventHandler, ReactNode } from 'react';

import styled from 'styled-components';

// SCSS에서 가져온 변수들
const primaryColor = '#your-primary-color';
const errorColor = '#your-error-color';
const hintColor = '#your-hint-color';
const onSurfaceColor = '#your-on-surface-color';
const surfaceContainerColor = '#your-surface-container-color';
const grayD9d9d9Color = '#your-gray-d9d9d9-color';
const fontSizeMedium = 'your-font-size-medium';
const fontSizeSmall = 'your-font-size-small';

const StyledButton = styled.button`
  width: 100%;
  padding: 1.4rem 0;
  text-align: center;
  border-radius: 0.8rem;
  font-size: ${fontSizeMedium};
  font-style: normal;
  line-height: normal;
  background-color: ${primaryColor};
  color: ${onSurfaceColor};
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: ${surfaceContainerColor};
    color: ${onSurfaceColor};
  }
`;

export type ButtonProps = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ children, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
