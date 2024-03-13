import styled from 'styled-components';

import DashboardItem from './DashboardItem';

export default function DashboardContainer() {
  const mockData = [
    {
      id: 0,
      myDashboard: true,
      title: '비브리지',
      color: 'theme.color.red_D6173A',
    },
    { id: 1, myDashboard: true, title: '코드잇' },
    { id: 2, myDashboard: false, title: '3분기 계획' },
    { id: 3, myDashboard: false, title: '회의록' },
    { id: 4, myDashboard: false, title: '중요 문서함' },
    { id: 5, myDashboard: true, title: '6번째 아이템' },
  ];

  return (
    <S.Container>
      {mockData.map((item) => (
        <DashboardItem key={item.id} {...item} />
      ))}
    </S.Container>
  );
}

const S = {
  Container: styled.div``,
};
