import React from 'react';

import styled from 'styled-components';

import TagBadge, { BadgeProps } from '@components/atoms/TagBadge';

interface Props {
  list: BadgeProps[] | string[];
  position?: 'absolute' | 'relative';
  // ref?: React.RefObject<HTMLDivElement>;
}

export default function TagBadgeContainer({ list, position = 'relative' }: Props) {
  console.log('list', list);

  // if (list.length === 0) return <p>등록된 태그가 없습니다.</p>;

  // const tagList = list.map((item) => item.color);

  return (
    <S.Container $position={position}>
      {list.map((item, _index) => (
        // eslint-disable-next-line react/jsx-key
        <TagBadge color={item.color}>{item.children || item}</TagBadge>
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
