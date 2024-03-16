'use client';

import styled from 'styled-components';

import SideBar from '@components/organisms/SideBar';

import InvitationList from './_components/InvitationList';
import MyDashboardList from './_components/MyDashboardList';
import DashboardNav from '../../components/organisms/DashboardNav';

export default function MyDashboardPage() {
  return (
    <>
      <DashboardNav />
      <SideBar />
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
