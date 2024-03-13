import styled from 'styled-components';

import InvitationText from '../atoms/InvitationText';

interface Props {
  dashboardName: string;
}

export default function InvitationDashboardName({ dashboardName }: Props) {
  return (
    <S.Wrapper>
      <InvitationText type='label'>이름</InvitationText>
      <InvitationText type='content'>{dashboardName}</InvitationText>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    display: flex;
    gap: 2.8rem;
  `,
};
