'use client';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import PlusShapeIcon from '../atoms/PlusShapeIcon';

const CardAppendButton = () => {
  return (
    <S.Box type='button'>
      <PlusShapeIcon />
    </S.Box>
  );
};

export default CardAppendButton;

const S = {
  Box: styled.button`
    width: 100%;
    height: 3.2rem;
    padding: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 0.6rem;
    border: 1px solid ${({ theme }) => theme.color.gray_D9D9D9};
    background: ${({ theme }) => theme.color.white_FFFFFF};

    cursor: pointer;

    @media ${mediaBreakpoint.tablet} {
      height: 4rem;
    }
  `,
};
