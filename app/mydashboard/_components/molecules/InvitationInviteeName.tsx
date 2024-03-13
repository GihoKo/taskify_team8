import styled from 'styled-components';

import InvitationText from '../atoms/InvitationText';

export default function InvitationInviteeName() {
  return (
    <S.Wrapper>
      <InvitationText type='label'>초대자</InvitationText>
      <InvitationText type='content'>손동희</InvitationText>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    display: flex;
    gap: 1.6rem;
  `,
};
