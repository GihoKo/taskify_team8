import styled from 'styled-components';

import InvitationText from '../atoms/InvitationText';

interface Props {
  dashboardName: string;
}

export default function InvitationDashboardName({ dashboardName }: Props) {
  return (
    <S.Wrapper>
      <InvitationText status='label'>이름</InvitationText>
      <InvitationText status='content'>{dashboardName}</InvitationText>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    display: flex;
    gap: 2.8rem;
  `,
};
