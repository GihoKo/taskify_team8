'use client';

import ToDoCardModal from '@/app/modaltest/ToDoCardModal';
import { Card, getCardItem } from '@apis/cards/getCardItem';
import { Comment, getCommentList } from '@apis/comments/getComments';

import { ModalComponentProps } from '@hooks/use-modal';
import { useEffect, useState } from 'react';

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
    console.log(1);

    if (!cardId) {
      return;
    }
    console.log('getCardItemResponse cardId');

    const card = await getCardItem(cardId);
    setCard(card);
  };

  const getCommentListResponse = async (cardId?: number) => {
    console.log(2);

    if (!cardId) {
      return;
    }

    console.log('getCommentListResponse cardId');
    const { comments, cursorId } = await getCommentList({ cardId });

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
      {/* 모달페이지: 카드 보여주기 (카드 초기값), 카드 수정하기 (카드 초기값) */}
      {/* <ToDoModal id={cardId} card={card} comments={comments} {...props} /> */}
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
