import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

interface Props {
  children: string;
}

export default function InvitationLabel({ children }: Props) {
  return <S.Label>{children}</S.Label>;
}

const S = {
  Label: styled.div`
    color: ${({ theme }) => theme.color.gray_9FA6B2};
    font-size: 14px;
    font-weight: 400;

    @media ${mediaBreakpoint.tablet} {
      display: none;
    }
    @media ${mediaBreakpoint.pc} {
      display: none;
    }
  `,
};
