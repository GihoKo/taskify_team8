import React from 'react';

import styled from 'styled-components';

import TagBadge, { BadgeProps } from '@components/atoms/TagBadge';

interface Props {
  list: BadgeProps[];
}

export default function TagBadgeContainer({ list }: Props) {
  return (
    <S.Container>
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
  Container: styled.div`
    display: flex;
    gap: 0.6rem;
  `,
};
