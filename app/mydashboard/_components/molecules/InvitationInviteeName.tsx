import styled from 'styled-components';

import InvitationText from '../atoms/InvitationText';

interface Props {
  inviter: string;
}

export default function InvitationInviteeName({ inviter }: Props) {
  return (
    <S.Wrapper>
      <InvitationText type='label'>초대자</InvitationText>
      <InvitationText type='content'>{inviter}</InvitationText>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    display: flex;
    gap: 1.6rem;
  `,
};
