import React, { useState } from 'react';

import styled from 'styled-components';

import { Comment } from '@apis/comments/getComments';

import CommentItem from '@components/molecules/CommentItem';
import ReplyInputForm from '@components/molecules/ReplyInputForm';

interface CommentAreaProps {
  cardId: number;
  comments: Comment[];
  dashboardId: number;
  columnId: number;
}

export default function CommentArea({ cardId, comments, dashboardId, columnId }: CommentAreaProps) {
  const [commentList, setCommentList] = useState(comments);

  return (
    <>
      <ReplyInputForm dashboardId={dashboardId} columnId={columnId} cardId={cardId} setCommentList={setCommentList} />
      <S.Container>
        {commentList.map((comment) => (
          <CommentItem key={comment.id} comment={comment} setCommentList={setCommentList} />
        ))}
      </S.Container>
    </>
  );
}

const S = {
  Container: styled.div`
    wrap-option: nowrap;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  `,
};
