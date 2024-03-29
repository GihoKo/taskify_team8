import { useRef } from 'react';

import styled from 'styled-components';

import { useClickOutside } from '@/app/modaltest/useClickOutside';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import ListItem, { ListItemProps } from '@components/atoms/ListItem';

interface ListGroupProps {
  itemList: ListItemProps[];
  onClose: () => void;
  position: { x: number; y: number };
}

export default function ListGroup({ itemList = [], onClose, position }: ListGroupProps) {
  const listGroupRef = useRef<HTMLDivElement>(null);
  console.log(position);
  useClickOutside(listGroupRef, onClose);

  return (
    <S.Container ref={listGroupRef} $position={position}>
      {itemList.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ListItem key={index} onClick={item.onClick}>
          {item.children}
        </ListItem>
      ))}
    </S.Container>
  );
}

const S = {
  Container: styled.div<{ $position: { x: number; y: number } }>`
    position: fixed;
    top: ${({ $position }) => $position.y}px;
    left: ${({ $position }) => $position.x}px;
    width: 8.6rem;
    padding: 0.6rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;

    border-radius: 0.6rem;
    border: 0.1rem solid ${({ theme }) => theme.color.gray_D9D9D9};
    background: ${({ theme }) => theme.color.white_FFFFFF};
    box-shadow: 0 0.4rem 2rem 0 rgba(0, 0, 0, 0.08);

    z-index: 3;

    @media ${mediaBreakpoint.tablet} {
      width: 9.3rem;
    }
  `,
};
