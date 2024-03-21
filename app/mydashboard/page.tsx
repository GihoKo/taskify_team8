import SideBar from '@components/organisms/SideBar';
import HydrationBoundaryComponent from '@components/server/HydrationBoundaryComponent';

import { getDashboardList } from './_components/apis/api';
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
          <HydrationBoundaryComponent
            FetchQueryOptions={{
              queryKey: ['dashboard', 'dashboardList', 1],
              queryFn: () => getDashboardList(1),
            }}
          >
            <MyDashboardList />
          </HydrationBoundaryComponent>
          <InvitationList />
        </Main>
      </div>
    </div>
  );
}
