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

// const cardId = 4460; // 얘를 어디서 넘겨 받나요?
// const dashboardId = 5190;
// const columnId = 17507;

export default function ToDoModalIndex({ cardId, dashboardId, columnId }: ModalComponentProps<ToDoModalParams>) {
  console.log('cardId:', cardId);
  console.log('dashboardId:', dashboardId);
  console.log('columnId:', columnId);
  const [card, setCard] = useState<Card>();
  const [commentList, setCommentList] = useState<Comment[]>([]);

  const getCardItemResponse = async () => {
    if (!cardId) {
      return;
    }

    const card = await getCardItem(cardId);
    setCard(card);
  };

  const getCommentListResponse = async () => {
    if (!cardId) {
      return;
    }
    const { comments, cursorId } = await getCommentList({ cardId });

    setCommentList(comments);
  };

  useEffect(() => {
    getCardItemResponse();
    getCardItemResponse();
    console.log('cardId:', cardId);
  }, [cardId]);

  return (
    <>
      {/* 모달페이지: 카드 보여주기 (카드 초기값), 카드 수정하기 (카드 초기값) */}
      {/* <ToDoModal id={cardId} card={card} comments={comments} {...props} /> */}
      <ToDoCardModal id={cardId} dashboardId={dashboardId} columnId={columnId} card={card} comments={commentList} />
    </>
  );
}
