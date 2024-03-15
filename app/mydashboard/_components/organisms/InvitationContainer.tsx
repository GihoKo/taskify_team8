import styled from 'styled-components';

import InvitationItem from './InvitationItem';
import InvitationHeader from '../molecules/InvitationHeader';

export default function InvitationContainer() {
  const mockData = [
    { id: 0, dashboardName: '프로덕트 디자인', inviter: '손동희' },
    { id: 1, dashboardName: '새로운 기획 문서', inviter: '안귀영' },
    { id: 2, dashboardName: '유닛 A', inviter: '장혁' },
    { id: 3, dashboardName: '유닛 B', inviter: '감나무' },
    { id: 4, dashboardName: '유닛 C', inviter: '김태현' },
    { id: 5, dashboardName: '유닛 D', inviter: '정혜진' },
  ];

  return (
    <S.Container>
      <InvitationHeader />
      {mockData.map((item) => (
        <InvitationItem key={item.id} dashboardName={item.dashboardName} inviter={item.inviter} />
      ))}
    </S.Container>
  );
}

const S = {
  Container: styled.div``,
};
