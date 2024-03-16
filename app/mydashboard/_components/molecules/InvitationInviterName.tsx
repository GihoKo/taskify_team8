import styled from 'styled-components';

import InvitationText from '../atoms/InvitationText';

interface Props {
  inviter: string;
}

export default function InvitationInviterName({ inviter }: Props) {
  return (
    <S.Wrapper>
      <InvitationText status='label'>초대자</InvitationText>
      <InvitationText status='content'>{inviter}</InvitationText>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    display: flex;
    gap: 1.6rem;
  `,
};
