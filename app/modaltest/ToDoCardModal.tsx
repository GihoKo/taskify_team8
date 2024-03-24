'use client';

import React, { MutableRefObject, useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import styled, { css } from 'styled-components';

import { deleteCardItem } from '@apis/cards/deleteCardItem';
import { Card } from '@apis/cards/getCardItem';
import { Comment } from '@apis/comments/getComments';
import CloseIcon from '@public/images/icons/close-icon.svg?component';
import Divider from '@public/images/icons/horizontal-divder.svg?component';
import KebabIcon from '@public/images/icons/kebab-icon.svg?component';
import { cardsKeys } from '@queries/keys/cardsKeys';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import ColumnNameBadge from '@components/atoms/ColumnNameBadge';
import AssigneeInformation from '@components/molecules/AssigneeInformation';
import ListGroup from '@components/molecules/ListGroup';
import TagBadgeContainer from '@components/molecules/TagBadgeContainer';
import CommentArea from '@components/organisms/CommentArea';

interface ToDoModalProps {
  id: number;
  card: Card;
  comments?: Comment[];
  columnId: number;
  dashboardId: number;
  closeModal: () => void;
  modalRef: MutableRefObject<HTMLElement | null> | null;
}

export default function ToDoCardModal({
  id,
  card,
  comments,
  columnId,
  dashboardId,
  closeModal,
  modalRef,
}: ToDoModalProps): JSX.Element {
  const [isListGroupOpen, setIsListGroupOpen] = useState(false);
  const [listGroupPosition, setListGroupPosition] = useState({ x: 0, y: 0 });

  const queryClient = useQueryClient();

  const handleListGroupClose = () => {
    setIsListGroupOpen(false);
  };

  const handleClickKebabButton = (event: React.MouseEvent<SVGSVGElement>) => {
    setIsListGroupOpen(true);
    setListGroupPosition({ x: event.clientX, y: event.clientY });
  };

  const onDeleteCard = async () => {
    try {
      await deleteCardItem(id);
      await queryClient.invalidateQueries({ queryKey: cardsKeys.cardList(columnId) });
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  const kebabList = [
    {
      children: '수정하기',
      onClick: () => {
        console.log('');
      },
    },
    { children: '삭제하기', onClick: onDeleteCard },
  ];

  console.log('card', card);

  return (
    <S.ModalTestDimmed>
      <S.ModalPage
        ref={(node) => {
          if (modalRef) {
            modalRef.current = node;
          }
        }}
      >
        <S.ButtonBox>
          <S.KebabIcon onClick={handleClickKebabButton} />
          <S.CloseIcon onClick={closeModal} />
          {isListGroupOpen && (
            <ListGroup itemList={kebabList} onClose={handleListGroupClose} position={listGroupPosition} />
          )}
        </S.ButtonBox>

        <S.Heading>{card.title}</S.Heading>
        <S.PageAlignWrapper>
          <AssigneeInformation assigneeName={card.assignee.nickname} dueDate={card.dueDate} />
          <S.Section>
            <S.BadgeBox>
              <ColumnNameBadge>To Do</ColumnNameBadge>
              <Divider />
              {/* ts-ignore */}
              <TagBadgeContainer list={card.tags} />
            </S.BadgeBox>
            <S.Content>{card.description}</S.Content>
            {card.imageUrl ? (
              <S.ImageWrapper>
                <Image src={card.imageUrl} alt='image' fill />{' '}
              </S.ImageWrapper>
            ) : null}
            {comments ? (
              <CommentArea cardId={id} comments={comments} dashboardId={dashboardId} columnId={columnId} />
            ) : null}
          </S.Section>
        </S.PageAlignWrapper>
      </S.ModalPage>
    </S.ModalTestDimmed>
  );
}

const iconCss = css`
  height: 1.2rem;
  width: 1.2rem;
  cursor: pointer;

  @media ${mediaBreakpoint.tablet} {
    height: 2.8rem;
    width: 2.8rem;
  }
`;

const S = {
  // TODO: Test영역 삭제 필요.
  ModalTestDimmed: styled.div`
    position: fixed;
    top: 0;
    height: 1554px;
    width: 100%;
    flex-shrink: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
  `,

  ModalPage: styled.div`
    width: 32.7rem;
    height: fit-content;
    white-space: nowrap;
    overflow-x: clip;
    overflow-y: scroll;
    scrollbar-width: thin;

    padding: 4rem 2rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.color.white_FFFFFF}; //컬러 적용하는 방법 확인

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex-shrink: 0;
    gap: 1.6rem;

    position: relative;

    @media ${mediaBreakpoint.tablet} {
      min-width: 68rem;
    }

    @media ${mediaBreakpoint.pc} {
      min-width: 73rem;
    }
  `,
  PageAlignWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
    @media ${mediaBreakpoint.tablet} {
      flex-direction: row-reverse;
      justify-content: flex-end;
      width: 68rem;
    }
  `,

  Section: styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
  `,

  Heading: styled.div`
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media ${mediaBreakpoint.tablet} {
      font-size: 2.4rem;
    }
  `,

  BadgeBox: styled.div`
    display: flex;
    gap: 1.2rem;
  `,

  Content: styled.p`
    width: 28.7rem;

    color: #000;
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.2rem; /* 183.333% */

    @media ${mediaBreakpoint.tablet} {
      width: 42rem;
      font-size: 1.4rem;
    }

    @media ${mediaBreakpoint.pc} {
      width: 45rem;
    }
  `,

  ImageWrapper: styled.div`
    position: relative;
    width: 28.7rem;
    height: 16.8rem;
    padding-top: 3.5rem;
    flex-shrink: 0;
    border-radius: 6px;

    @media ${mediaBreakpoint.tablet} {
      width: 42rem;
      height: 24.5rem;
    }

    @media ${mediaBreakpoint.pc} {
      width: 45rem;
      height: 26.2rem;
    }
  `,
  StyledImage: styled(Image)`
    padding-top: 3.5rem;
    flex-shrink: 0;
    border-radius: 6px;
  `,

  ButtonBox: styled.div`
    display: flex;
    gap: 1.6rem;
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;

    @media ${mediaBreakpoint.tablet} {
      gap: 2.4rem;

      top: 3.2rem;
      right: 2.8rem;
    }
  `,
  KebabIcon: styled(KebabIcon)`
    ${iconCss}
  `,
  CloseIcon: styled(CloseIcon)`
    ${iconCss}
  `,
};
