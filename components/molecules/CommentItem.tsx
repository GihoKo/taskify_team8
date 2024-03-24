import React, { useState } from 'react';

import styled from 'styled-components';

import { deleteComment } from '@apis/comments/deleteComment';
import { Comment } from '@apis/comments/getComments';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import ProfileImage from '@components/atoms/ProfileImage';
import ReplyModifyForm from '@components/molecules/ReplyEditForm';

import { formatDateWithTime } from '@utils/time/formatDateShorter';

interface CommentItemProps {
  comment: Comment;
  setCommentList: React.Dispatch<React.SetStateAction<Comment[]>>;
}

export default function CommentItem({ comment, setCommentList }: CommentItemProps) {
  const { author, createdAt, content, id: commentId } = comment;
  const { nickname: authorNickname } = author;

  const [isEditMode, setIsEditMode] = useState(false);

  const onClickModify = () => {
    setIsEditMode(true);
  };

  const onClickDelete = async () => {
    const result = window.confirm('댓글을 삭제하시겠습니까?');

    if (result) {
      const response = await deleteComment(commentId);

      if (response.status >= 300) {
        alert('댓글 삭제에 실패했습니다.');

        return;
      }

      setCommentList((prev: Comment[]) => prev.filter((comment) => comment.id !== commentId));
    }
  };

  const formattedDate = formatDateWithTime(createdAt);

  return (
    <S.Area>
      <S.PositionAdjuster>
        <ProfileImage defaultName={authorNickname} />
      </S.PositionAdjuster>
      <S.Box>
        <S.HeaderWrapper>
          <S.Writer>서인덕</S.Writer>
          <S.CreatedDate>{formattedDate}</S.CreatedDate>
        </S.HeaderWrapper>
        {isEditMode ? (
          <ReplyModifyForm
            initialContent={content}
            commentId={commentId}
            onClickCancel={setIsEditMode}
            setCommentList={setCommentList}
          />
        ) : (
          <>
            <S.Content>{content}</S.Content>
            <S.ModifyTextWrapper>
              <S.ModifyText onClick={onClickModify}>수정</S.ModifyText>
              <S.ModifyText onClick={onClickDelete}>삭제</S.ModifyText>
            </S.ModifyTextWrapper>
          </>
        )}
      </S.Box>
    </S.Area>
  );
}

const S = {
  Area: styled.div`
    display: flex;
    gap: 0.8rem;
    justify-content: left;
    align-items: flex-start;
    width: 28.8rem;
    position: relative;
    word-break: break-all;

    @media ${mediaBreakpoint.tablet} {
      width: 42rem;
    }
    @media ${mediaBreakpoint.pc} {
      width: 45rem;
    }
  `,
  PositionAdjuster: styled.div`
    position: relative;
    top: -0.5rem;
    @media ${mediaBreakpoint.tablet} {
      top: -1rem;
    }
  `,

  Box: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    position: relative;
    @media ${mediaBreakpoint.tablet} {
      gap: 1.2rem;
    }
  `,
  HeaderWrapper: styled.div`
    display: flex;
    gap: 0.6rem;
    align-items: center;
  `,
  Writer: styled.span`
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media ${mediaBreakpoint.tablet} {
      font-size: 1.4rem;
    }
  `,
  CreatedDate: styled.span`
    color: ${({ theme }) => theme.color.gray_9FA6B2};
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media ${mediaBreakpoint.tablet} {
      font-size: 1.2rem;
    }
  `,
  Content: styled.p`
    color: ${({ theme }) => theme.color.black_333236};
    height: fit-content;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    word-break: break-all;
    white-space: pre-wrap;
    @media ${mediaBreakpoint.tablet} {
      font-size: 1.4rem;
    }
  `,
  ModifyText: styled.span`
    color: ${({ theme }) => theme.color.gray_9FA6B2};
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    cursor: pointer;
    @media ${mediaBreakpoint.tablet} {
      font-size: 1.2rem;
    }
  `,
  ModifyTextWrapper: styled.div`
    display: flex;
    gap: 0.8rem;
  `,
};
