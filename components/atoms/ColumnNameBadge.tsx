import styled from 'styled-components';

import ElipsIcon from '@public/images/icons/ellipse.svg?component';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

interface BadgeProps {
  children?: string;
}

export default function ColumnNameBadge({ children = '' }: BadgeProps) {
  return (
    <S.Badge>
      <ElipsIcon />
      {children}
    </S.Badge>
  );
}

const S = {
  Badge: styled.div`
    display: inline-flex;
    padding: 0.4rem 0.8rem;
    align-items: center;
    gap: 0.6rem;

    border-radius: 11px;
    background: ${({ theme }) => theme.color.violet_F1EFFD};
    color: ${({ theme }) => theme.color.violet_5534DA};

    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.2rem;
    }
  `,
};
