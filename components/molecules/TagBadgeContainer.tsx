import React from 'react';

import styled from 'styled-components';

import TagBadge, { BadgeProps } from '@components/atoms/TagBadge';

interface Props {
  list: BadgeProps[];
  position?: 'absolute' | 'relative';
  // ref?: React.RefObject<HTMLDivElement>;
}

export default function TagBadgeContainer({ list, position = 'relative' }: Props) {
  return (
    <S.Container $position={position}>
      {list.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <TagBadge key={index} color={item.color}>
          {item.children}
        </TagBadge>
      ))}
    </S.Container>
  );
}

const S = {
  Container: styled.div<{ $position: 'absolute' | 'relative' }>`
    display: flex;
    gap: 0.6rem;
    position: ${({ $position }) => $position};
    left: ${({ $position }) => ($position === 'absolute' ? '1.6rem' : '')};
    top: ${({ $position }) => ($position === 'absolute' ? '1.4rem' : '')};
  `,
};
