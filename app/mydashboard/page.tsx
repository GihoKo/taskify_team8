import SideBar from '@components/organisms/SideBar/SideBar';
import HydrationBoundaryComponent from '@components/server/HydrationBoundaryComponent';

import InvitationList from './_components/InvitationList';
import Main from './_components/Main/Main';
import MyDashboardList from './_components/MyDashboardList';
import { prefetchDashboardList, prefetchInvitationList } from './_utils/prefetchDashboardList.query';
import DashboardNav from '../../components/organisms/DashboardNav';

export default function MyDashboardPage() {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <div style={{ backgroundColor: '#FAFAFA', flexGrow: 1 }}>
        <DashboardNav />
        <Main>
          <HydrationBoundaryComponent prefetchFunctionArray={[(queryClient) => prefetchDashboardList({ queryClient })]}>
            <MyDashboardList />
          </HydrationBoundaryComponent>
          <HydrationBoundaryComponent
            prefetchFunctionArray={[(queryClient) => prefetchInvitationList({ queryClient })]}
          >
            <InvitationList />
          </HydrationBoundaryComponent>
        </Main>
      </div>
    </div>
  );
}
