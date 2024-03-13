import styled from 'styled-components';

import InvitationText from '../atoms/InvitationText';

export default function InvitationDashboardName() {
  return (
    <S.Wrapper>
      <InvitationText type='label'>이름</InvitationText>
      <InvitationText type='content'>프로덕트 디자인</InvitationText>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    display: flex;
    gap: 2.8rem;
  `,
};
