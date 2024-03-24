'use client';

import { useEffect, useState } from 'react';

import ToDoCardModal from '@/app/modaltest/ToDoCardModal';
import { Card, getCardItem } from '@apis/cards/getCardItem';
import { Comment, getCommentList } from '@apis/comments/getComments';

import { ModalComponentProps } from '@hooks/use-modal';

type ToDoModalParams = {
  cardId: number;
  dashboardId: number;
  columnId: number;
};

export default function ToDoModalIndex({
  cardId,
  dashboardId,
  columnId,
  closeModal,
  modalRef,
}: ModalComponentProps<ToDoModalParams>) {
  const [card, setCard] = useState<Card>();
  const [commentList, setCommentList] = useState<Comment[]>([]);

  const getCardItemResponse = async (cardId?: number) => {
    if (!cardId) {
      return;
    }

    const card = await getCardItem(cardId);
    setCard(card);
  };

  const getCommentListResponse = async (cardId?: number) => {
    if (!cardId) {
      return;
    }

    const { comments } = await getCommentList({ cardId });

    setCommentList(comments);
  };

  useEffect(() => {
    getCardItemResponse(cardId);
    getCommentListResponse(cardId);
  }, [cardId]);

  useEffect(() => {
    if (!cardId) {
      return;
    }

    console.log('cardId:', cardId);
  }, [cardId]);

  if (!cardId || !dashboardId || !columnId || !card) {
    return null;
  }

  return (
    <>
      <ToDoCardModal
        closeModal={closeModal}
        modalRef={modalRef}
        id={cardId}
        dashboardId={dashboardId}
        columnId={columnId}
        card={card}
        comments={commentList}
      />
    </>
  );
}
