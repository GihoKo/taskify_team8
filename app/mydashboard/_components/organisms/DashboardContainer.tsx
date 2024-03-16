import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import DashboardItem from './DashboardItem';
import CreateDashboardButton from '../molecules/CreateDashboardButton';

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
  ];

  return (
    <S.Container>
      <CreateDashboardButton onClick={() => {}} />
      {mockData.map((item) => (
        <DashboardItem key={item.id} {...item} />
      ))}
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    @media ${mediaBreakpoint.tablet} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    @media ${mediaBreakpoint.pc} {
      grid-template-columns: repeat(3, 1fr);
    }
  `,
};
