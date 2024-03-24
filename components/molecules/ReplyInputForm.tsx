import React, { Dispatch, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import styled from 'styled-components';

import { Comment } from '@apis/comments/getComments';
import { postCommentList, postCommentListParams } from '@apis/comments/postComments';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

interface Props {
  dashboardId: number;
  columnId: number;
  cardId: number;
  setCommentList: Dispatch<SetStateAction<Comment[]>>;
}

interface InputParams {
  content: string;
}

// TODO: 입력버튼이 textarea를 가리는 문제.
export default function ReplyInputForm({ dashboardId, columnId, cardId, setCommentList }: Props) {
  const { reset, register, handleSubmit } = useForm<InputParams>();

  const onSubmit: SubmitHandler<InputParams> = async (input) => {
    const newComment: postCommentListParams = {
      content: input.content,
      dashboardId,
      columnId,
      cardId,
    };

    const response = await postCommentList(newComment);

    if (!response) {
      alert('댓글 작성에 실패했습니다.');

      return;
    }

    setCommentList((previous: Comment[]) => [response, ...previous]);

    reset();
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.HeaderText>댓글</S.HeaderText>
      <S.Input placeholder='댓글 작성하기' {...register('content', { required: true })} />
      <S.Button type='submit'>입력</S.Button>
    </S.Form>
  );
}

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

  Button: styled.button`
    width: 8.4rem;
    height: 2.8rem;
    padding: 0.9rem 3.1rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;

    position: absolute;
    right: 1.2rem;
    bottom: 1.2rem;

    border-radius: 0.4rem;
    border: 0.1rem solid ${({ theme }) => theme.color.gray_D9D9D9};
    background: ${({ theme }) => theme.color.white_FFFFFF};

    color: ${({ theme }) => theme.color.violet_5534DA};
    text-align: center;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    white-space: nowrap;
    cursor: pointer;
  `,
};
