import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import ListItem, { ListItemProps } from '@components/atoms/ListItem';

interface BadgeProps {
  itemList: ListItemProps[];
}

export default function ListGroup({ itemList = [] }: BadgeProps) {
  return (
    <S.Container>
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
  Container: styled.div`
    width: 8.6rem;
    padding: 0.6rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;

    border-radius: 0.6rem;
    border: 0.1rem solid var(--gray-gray_D9D9D9, #d9d9d9);
    background: var(--white-white_FFFFFF, #fff);
    box-shadow: 0 0.4rem 2rem 0 rgba(0, 0, 0, 0.08);

    @media ${mediaBreakpoint.tablet} {
      width: 9.3rem;
    }
  `,
};
