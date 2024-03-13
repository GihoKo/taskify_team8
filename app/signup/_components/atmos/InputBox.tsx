import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

export default function InputBox() {
  return (
    <S.InputBox>
      이메일
      <S.InputArea>이메일을 입력해 주세요.</S.InputArea>
    </S.InputBox>
  );
}

const S = {
  InputBox: styled.div`
    color: ${({ theme }) => theme.color.black_333236};
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,

  InputArea: styled.div`
    display: flex;
    height: 5rem;
    padding: 1.5rem 1.6rem;
    align-items: center;
    gap: 1rem;
    align-self: stretch;

    border-radius: 0.8rem;
    border: 0.1rem solid ${({ theme }) => theme.color.gray_D9D9D9};
    background: ${({ theme }) => theme.color.white_FFFFFF};

    @media ${mediaBreakpoint.tablet} {
      width: 52rem;
      height: 5rem;
    }

    @media ${mediaBreakpoint.pc} {
      width: 52rem;
      height: 5rem;
    }
  `,
};
