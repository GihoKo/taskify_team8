import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

export default function InvitationTitle() {
  return <S.Title>초대받은 대시보드</S.Title>;
}

const S = {
  Title: styled.h1`
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 20px;
    font-weight: 700;
    @media ${mediaBreakpoint.tablet} {
      font-size: 24px;
    }
    @media ${mediaBreakpoint.pc} {
      font-size: 24px;
    }
  `,
};
