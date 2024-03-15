import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

interface Props {
  children: string;
  type: 'label' | 'content' | 'header';
}

export default function InvitationText({ children, type }: Props) {
  return <S.Text type={type}>{children}</S.Text>;
}

const S = {
  Text: styled.div<{ type: 'label' | 'content' | 'header' }>`
    color: ${({ theme, type }) => (type === 'content' ? theme.color.black_333236 : theme.color.gray_9FA6B2)};
    font-size: 1.4rem;
    font-weight: 400;

    @media ${mediaBreakpoint.tablet} {
      display: ${({ type }) => (type === 'label' ? 'none' : 'block')};
      font-size: 1.6rem;
    }

    @media ${mediaBreakpoint.pc} {
      display: ${({ type }) => (type === 'label' ? 'none' : 'block')};
      font-size: 1.6rem;
    }
  `,
};
