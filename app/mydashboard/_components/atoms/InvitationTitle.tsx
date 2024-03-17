import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

export default function InvitationTitle() {
  return <S.Title>초대받은 대시보드</S.Title>;
}

const S = {
  Title: styled.h3`
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;

    @media ${mediaBreakpoint.tablet} {
      font-size: 2.4rem;
    }
    @media ${mediaBreakpoint.pc} {
      font-size: 2.4rem;
    }
  `,
};
