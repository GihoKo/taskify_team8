import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

export interface ListItemProps {
  children: string;
  onClick?: () => void;
}

export default function ListItem({ children = '', onClick }: ListItemProps) {
  return <S.Item onClick={onClick}>{children}</S.Item>;
}

const S = {
  Item: styled.div`
    width: 7.4rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 4px;

    color: var(--black-black_333236, #333236);
    text-align: center;
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-size: 1.2rem;
    line-height: normal;
    font-weight: 400;
    font-style: normal;

    &:hover {
      background: var(--violet-violet-8, #f1effd);
      color: var(--violet-violet_5534DA, #5534da);
    }

    @media ${mediaBreakpoint.tablet} {
      width: 8rem;
      height: 3.2rem;
      text-align: center;
      font-size: 1.4rem;
    }
  `,
};
