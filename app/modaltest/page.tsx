'use client';

import ToDoCardModal from '@/app/_modals/ToDoCardModal';
import { Card, getCardItem } from '@apis/cards/getCardItem';
import { getCommentList } from '@apis/comments/getComments';

import { ModalComponentProps } from '@hooks/use-modal';

const cardId = 4460; // 얘를 어디서 넘겨 받나요?

/**
 * 카드: 이미 use client로 클라이언트 컴포넌트로 만들어놨음
 *
 * 근데 ToDoCardModal은 서버 컴포넌트로 만들어놨음
 *
 * ToDoCardModal에서 서버 렌더링의 이점을 얻을 수 있나요?
 */
// (cardId를 넘기는 쪽: 카드) => (ToDoModalIndex: 카드에서 id받아서, id로 서버 페치->  바탕으로 안의 내용물만 바꿔주는 모달 컨테이너 역할)

type ToDoModalParams = {
  cardId: number;
  dashboardId: number;
  columnId: number;
};

// "content": "sadffasdfsadffsdaasfd",
//   "dashboardId": 5190,
// "columnId": 17507,
// "cardId": 4037

const dashboardId = 5190;
const columnId = 17507;

export default function ToDoModalIndex(props: ModalComponentProps<ToDoModalParams>) {
  // 서버데이터
  const card: Card = getCardItem(cardId);
  const { comments, cursorId } = getCommentList({ cardId });

  return (
    <>
      {/* 모달페이지: 카드 보여주기 (카드 초기값), 카드 수정하기 (카드 초기값) */}
      {/* <ToDoModal id={cardId} card={card} comments={comments} {...props} /> */}
      <ToDoCardModal id={cardId} card={card} comments={comments} dashboardId={dashboardId} columnId={columnId} />
    </>
  );
}
