import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

interface Props {
  onClick?: () => void;
}

// TODO: 입력버튼이 textarea를 가리는 문제.
export default function ReplyInputForm({ onClick }: Props) {
  return (
    <S.Box>
      <S.HeaderText>댓글</S.HeaderText>
      <S.Input placeholder='댓글 작성하기' />
      <S.Button type='submit' onClick={onClick}>
        입력
      </S.Button>
    </S.Box>
  );
}

const S = {
  Box: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

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
  `,
};
