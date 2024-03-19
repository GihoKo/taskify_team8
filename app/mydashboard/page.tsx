// import SideBar from '@components/organisms/SideBar';
import { dashboardKeys } from '@/queries/keys/dashboardKeys';
import { getDashboardList } from '@apis/dashboards/getDashboardList';

import SideBar from '@components/organisms/SideBar';

import InvitationList from './_components/InvitationList';
import MyDashboardList from './_components/MyDashboardList';
import Main from './Main';
import ServerComponent from './ServerComponent';
import DashboardNav from '../../components/organisms/DashboardNav';

export default async function MyDashboardPage() {
  return (
    <>
      <div style={{ display: 'flex', position: 'relative' }}>
        <ServerComponent
          fetchQueryOptions={{ queryKey: dashboardKeys.currentPage(1), queryFn: () => getDashboardList(1) }}
        >
          <SideBar />
        </ServerComponent>
        <div style={{ backgroundColor: '#FAFAFA', flexGrow: 1 }}>
          <DashboardNav />
          <Main>
            {/* <ServerComponent2>
              <MyDashboardList />
            </ServerComponent2> */}
            <ServerComponent
              fetchQueryOptions={{
                queryKey: ['dashboard', 'dashboardList', 3],
                queryFn: () => getDashboardList(3),
              }}
            >
              <MyDashboardList />
            </ServerComponent>
            <InvitationList />
          </Main>
        </div>
        {/* <Dim>
          <CreateDashboardModal />
        </Dim> */}
      </div>
    </>
  );
}
