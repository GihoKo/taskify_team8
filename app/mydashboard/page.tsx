import SideBar from '@components/organisms/SideBar';

import InvitationList from './_components/InvitationList';
import MyDashboardList from './_components/MyDashboardList';
import Main from './Main';
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
