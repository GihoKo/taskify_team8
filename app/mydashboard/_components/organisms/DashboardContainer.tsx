import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import DashboardItem from './DashboardItem';
import { dashboardMock } from '../mock/mock';
import CreateDashboardButton from '../molecules/CreateDashboardButton';

export default function DashboardContainer() {
  return (
    <S.Container>
      <CreateDashboardButton onClick={() => {}} />
      {dashboardMock.map((item) => (
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
