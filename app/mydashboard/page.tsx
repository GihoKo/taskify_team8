import SideBar from '@components/organisms/SideBar';
import HydrationBoundaryComponent from '@components/server/HydrationBoundaryComponent';

import CreateDashboardModal from './_components/CreateDashboardModal';
import InvitationList from './_components/InvitationList';
import Main from './_components/Main/Main';
import MyDashboardList from './_components/MyDashboardList';
import DashboardNav from '../../components/organisms/DashboardNav';
import {
  prefetchDashboardList,
  prefetchInvitationList,
} from '../dashboard/[dashboardId]/_utils/prefetchDashboardList.query';

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
      <CreateDashboardModal />
    </div>
  );
}
