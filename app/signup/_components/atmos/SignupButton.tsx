import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

export default function LoginButton() {
  return <S.LoginButton>가입하기</S.LoginButton>;
}

const S = {
  LoginButton: styled.button`
    display: flex;
    width: 35.1rem;
    height: 5rem;
    padding: 1.4rem 23.6rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;

    background: ${({ theme }) => theme.color.gray_9FA6B2};

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
