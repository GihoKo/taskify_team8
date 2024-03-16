import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

type Status = 'label' | 'content' | 'header';

interface Props {
  children: string;
  status: Status;
}

export default function InvitationText({ children, status }: Props) {
  return <S.Text $status={status}>{children}</S.Text>;
}

const S = {
  Text: styled.span<{ $status: Status }>`
    color: ${({ theme, $status }) => ($status === 'content' ? theme.color.black_333236 : theme.color.gray_9FA6B2)};
    font-size: 1.4rem;
    font-weight: 400;

    @media ${mediaBreakpoint.tablet} {
      display: ${({ $status }) => ($status === 'label' ? 'none' : 'block')};
      font-size: 1.6rem;
    }

    @media ${mediaBreakpoint.pc} {
      display: ${({ $status }) => ($status === 'label' ? 'none' : 'block')};
      font-size: 1.6rem;
    }
  `,
};
