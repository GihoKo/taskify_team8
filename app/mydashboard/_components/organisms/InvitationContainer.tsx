import styled from 'styled-components';

import InvitationItem from './InvitationItem';
import { InvitationMock } from '../mock/mock';
import InvitationHeader from '../molecules/InvitationHeader';

export default function InvitationContainer() {
  return (
    <S.Container>
      <InvitationHeader />
      {InvitationMock.map((item) => (
        <InvitationItem key={item.id} dashboardName={item.dashboardName} inviter={item.inviter} />
      ))}
    </S.Container>
  );
}

const S = {
  Container: styled.div``,
};
