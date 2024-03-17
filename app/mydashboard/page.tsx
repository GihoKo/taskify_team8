'use client';

import styled from 'styled-components';

import InvitationList from './_components/InvitationList';
import MyDashboardList from './_components/MyDashboardList';

export default function MyDashboardPage() {
  return (
    <>
      {/* <Navbar/> */}
      {/* <Sidebar/> */}
      <MainArea>
        <MyDashboardList />
        <InvitationList />
      </MainArea>
    </>
  );
}

const MainArea = styled.main`
  background-color: ${({ theme }) => theme.color.gray_FAFAFA};
`;
