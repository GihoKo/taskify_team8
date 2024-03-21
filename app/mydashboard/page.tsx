import SideBar from '@components/organisms/SideBar';

import InvitationList from './_components/InvitationList';
import Main from './_components/Main/Main';
import MyDashboardList from './_components/MyDashboardList';
import DashboardNav from '../../components/organisms/DashboardNav';

export default function MyDashboardPage() {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <div style={{ backgroundColor: '#FAFAFA', flexGrow: 1 }}>
        <DashboardNav />
        <Main>
          <MyDashboardList />
          <InvitationList />
        </Main>
      </div>
    </div>
  );
}
