import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import styled, { css } from 'styled-components';

import { Comment } from '@apis/comments/getComments';
import { putComment, putCommentParams } from '@apis/comments/putComment';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

interface Props {
  commentId: number;
  initialContent: string;
  onClickCancel: React.Dispatch<React.SetStateAction<boolean>>;
  setCommentList: React.Dispatch<React.SetStateAction<Comment[]>>;
}

interface InputParams {
  content: string;
}

// TODO: 입력버튼이 textarea를 가리는 문제.
export default function ReplyModifyForm({ commentId, initialContent, onClickCancel, setCommentList }: Props) {
  const { register, handleSubmit, getValues } = useForm<InputParams>({
    defaultValues: {
      content: initialContent,
    },
  });

  const onSubmit: SubmitHandler<InputParams> = async () => {
    const newContent = getValues('content');

    const newComment: putCommentParams = {
      commentId,
      content: newContent,
    };

    const response = await putComment(newComment);

    if (!response) {
      alert('댓글 작성에 실패했습니다.');
    }

    setCommentList((prev) =>
      prev.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, content: newContent };
        }

        return comment;
      }),
    );
    onClickCancel(false);
  };

  const handleClickCancel = () => {
    onClickCancel(false);
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Input placeholder='댓글 작성하기' {...register('content', { required: true })} />
      <S.CancelButton type='button' onClick={handleClickCancel}>
        취소
      </S.CancelButton>
      <S.SubmitButton type='submit'>입력</S.SubmitButton>
    </S.Form>
  );
}

const buttonStyle = css`
  width: 4.4rem;
  height: 2.8rem;
  padding: 0.9rem 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;

  position: absolute;
  bottom: 1.2rem;

  border-radius: 0.4rem;
  border: 0.1rem solid ${({ theme }) => theme.color.gray_D9D9D9};
  background: ${({ theme }) => theme.color.white_FFFFFF};

  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  white-space: nowrap;
  cursor: pointer;
`;

const S = {
  Form: styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    margin-bottom: 3rem;

    gap: 0.8rem;
    flex-shrink: 0;
    position: relative;
    top: 1.2rem;
    right: 4rem;
    @media ${mediaBreakpoint.tablet} {
      width: 42rem;
    }
    @media ${mediaBreakpoint.pc} {
      width: 45rem;
    }
  `,

  HeaderText: styled.h2`
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `,

  Input: styled.textarea`
    padding: 12px 12px;
    width: 28.7rem;
    min-height: 7rem;
    flex-shrink: 0;

    resize: none;

    vertical-align: top;

    border-radius: 0.6rem;
    border: 0.1rem solid ${({ theme }) => theme.color.gray_D9D9D9};
    background: ${({ theme }) => theme.color.white_FFFFFF};

    ::placeholder {
      color: ${({ theme }) => theme.color.gray_9FA6B2};
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    @media ${mediaBreakpoint.tablet} {
      min-height: 11rem;
      width: 42rem;
    }
    @media ${mediaBreakpoint.pc} {
      width: 45rem;
    }
  `,

  SubmitButton: styled.button`
    ${buttonStyle};
    right: 1.2rem;
    color: ${({ theme }) => theme.color.violet_5534DA};
  `,

  CancelButton: styled.button`
    ${buttonStyle};
    right: 6rem;
    color: ${({ theme }) => theme.color.gray_9FA6B2};
  `,
};
