'use client';

import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { RANDOM_TAG_COLOR_MAP } from '@constants/randomColorMap';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

type CardTagProps = PropsWithChildren;

const getRandomPickedColorSet = () => {
  return Object.entries(RANDOM_TAG_COLOR_MAP)[Math.floor(Math.random() * Object.keys(RANDOM_TAG_COLOR_MAP).length)];
};

const CardTag = ({ children }: CardTagProps) => {
  const [randomBackgroundColor, randomFontColor] = getRandomPickedColorSet();

  return (
    <S.Tag $randomBackgroundColor={randomBackgroundColor} $randomFontColor={randomFontColor}>
      {children}
    </S.Tag>
  );
};

export default CardTag;

const S = {
  Tag: styled.div<{ $randomBackgroundColor?: string; $randomFontColor?: string }>`
    display: flex;
    padding: 0.4rem 0.6rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    border-radius: 0.4rem;
    background: ${({ $randomBackgroundColor }) => $randomBackgroundColor};

    color: ${({ $randomFontColor }) => $randomFontColor};
    text-align: center;
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 400;
    line-height: normal;

    width: fit-content;
    min-width: 0;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.2rem;
    }
  `,
};
