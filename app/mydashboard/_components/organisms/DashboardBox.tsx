import styled from 'styled-components';

import DashboardContainer from './DashboardContainer';
import PageNationWrapper from '../molecules/PageNationWrapper';

export default function DashboardBox() {
  return (
    <S.Box>
      <DashboardContainer />
      <PageNationWrapper />
    </S.Box>
  );
}

const S = {
  Box: styled.div`
    display: flex;
    flex-direction: column;
  `,
};
