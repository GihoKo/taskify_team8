import styled from 'styled-components';

import { BadgeColor, BadgeColors } from '@constants/BadgeColor';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

export interface BadgeProps {
  color: BadgeColors;
  children?: string;
}

export default function TagBadge({ color = 'green', children = '' }: BadgeProps) {
  return <S.Badge $colorType={color}>{children}</S.Badge>;
}

interface ColorProps {
  $colorType: BadgeColors;
}

const S = {
  Badge: styled.div<ColorProps>`
    display: inline-flex;
    padding: 0.4rem 0.6rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    white-space: nowrap;

    border-radius: 4px;
    background: ${(props) => `${BadgeColor[props.$colorType].background}`};

    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${(props) => `${BadgeColor[props.$colorType].text}`};

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.2rem;
    }
  `,
};
