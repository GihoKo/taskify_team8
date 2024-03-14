'use client';

import { ButtonHTMLAttributes } from 'react';

import Image from 'next/image';
import { css, styled } from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

interface CogWheelProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fixedSize?: string;
}

const Cogwheel = ({ fixedSize, ...rest }: CogWheelProps) => {
  return (
    <S.CogwheelButton $fixedSize={fixedSize} {...rest}>
      <S.CogwheelImage fill src={'/images/icons/cogwheel-unfilled-w24-h24.svg'} alt='컬럼 수정 톱니 바퀴 버튼 이미지' />
    </S.CogwheelButton>
  );
};

export default Cogwheel;

const responsiveSize = css<{ $fixedSize?: string }>`
  ${({ $fixedSize }) =>
    $fixedSize
      ? ''
      : css`
          @media ${mediaBreakpoint.tablet} {
            width: 2.4rem;
            height: 2.4rem;
          }
        `}
`;

const S = {
  CogwheelButton: styled.button<{ $fixedSize?: string }>`
    position: relative;

    border: none;
    padding: 0;

    cursor: pointer;
    background: transparent;

    width: ${({ $fixedSize }) => $fixedSize || '2.2rem'};
    height: ${({ $fixedSize }) => $fixedSize || '2.2rem'};

    ${responsiveSize}
  `,

  CogwheelImage: styled(Image)`
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  `,
};
