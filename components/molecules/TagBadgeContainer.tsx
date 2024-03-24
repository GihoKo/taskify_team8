import React from 'react';

import styled from 'styled-components';

import TagBadge, { BadgeProps } from '@components/atoms/TagBadge';

interface Props {
  list: BadgeProps[];
}

export default function TagBadgeContainer({ list }: Props) {
  console.log('list', list);

  if (list.length === 0) return <p>등록된 태그가 없습니다.</p>;

  // const tagList = list.map((item) => item.color);

  return (
    <S.Container>
      {list.map((item, index) => (
        <TagBadge key={index} color={item.color}>
          {item}
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
