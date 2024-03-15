'use client';

import { ButtonHTMLAttributes } from 'react';

import styled from 'styled-components';

import { ResponsiveUnitUtility } from '@interface/style';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';
import { setBaseButtonResponsiveHeight, setBaseButtonResponsiveWidth } from '@styles/utils/button';

interface BaseButtonSizeProps {
  width?: ResponsiveUnitUtility;
  height?: ResponsiveUnitUtility;
}

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: BaseButtonSizeProps;
  fullWidth?: boolean;
}

export interface BaseButtonStyledComponentProps {
  $size?: BaseButtonSizeProps;
  $fullWidth?: boolean;
}

const BaseButton = ({ children, disabled, size, fullWidth, ...rest }: BaseButtonProps) => {
  return (
    <S.Button $size={size} $fullWidth={fullWidth} disabled={disabled} {...rest}>
      {children}
    </S.Button>
  );
};

export default BaseButton;

const S = {
  Button: styled.button<BaseButtonStyledComponentProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    ${setBaseButtonResponsiveWidth('8.4rem')}
    ${setBaseButtonResponsiveHeight({ onMobile: '2.8rem', onTablet: '3.2rem' })}

    padding: 0;
    border: none;
    border-radius: 0.4rem;

    background: ${({ theme: { color } }) => color.violet_5534DA};
    &:disabled {
      background: ${({ theme: { color } }) => color.gray_9FA6B2};
    }

    cursor: pointer;

    color: ${({ theme: { color } }) => color.white_FFFFFF};
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: normal;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.4rem;
    }
  `,
};
