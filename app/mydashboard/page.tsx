'use client';

import SideBar from '@components/organisms/SideBar';

import InvitationList from './_components/InvitationList';
import MyDashboardList from './_components/MyDashboardList';
import DashboardNav from '../../components/organisms/DashboardNav';

export default function MyDashboardPage() {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <div>
        <DashboardNav />
        <main style={{ backgroundColor: '#FAFAFA', padding: '2.4rem 2.4rem 0' }}>
          <MyDashboardList />
          <InvitationList />
        </main>
      </div>
    </div>
  );
}
