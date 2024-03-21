import HydrationBoundaryComponent from '@components/server/HydrationBoundaryComponent';

import ArrowLeftIconButton from './_components/ArrowLeftIconButton';
import ContentsArea from './_components/ContentArea';
import DashboardDeleteButton from './_components/DashboardDeleteButton';
import DashboardInfoEditForm from './_components/DashboardInfoEditForm';
import InviteeManageForm from './_components/InviteeManageForm';
import MemberManageForm from './_components/MemberManageForm';
import { prefetchDashboardDetail } from './_utils/prefetchDashboardDetail.query';
import { prefetchDashboardInvitationList } from './_utils/prefetchDashboardInvitationList.query';
import { prefetchDashboardMemberList } from './_utils/prefetchDashboardMemberList.query';
import { DashboardPageParams } from '../page';

const DashboardEditPage = ({ params }: DashboardPageParams) => {
  console.log(params.dashboardId);
  const NumericDashboardId = Number(params.dashboardId);

  return (
    <ContentsArea>
      <ArrowLeftIconButton>돌아가기</ArrowLeftIconButton>
      <HydrationBoundaryComponent
        prefetchFunctionArray={[
          (queryClient) => prefetchDashboardDetail({ queryClient, dashboardId: NumericDashboardId }),
        ]}
      >
        <DashboardInfoEditForm dashboardId={NumericDashboardId} />
      </HydrationBoundaryComponent>
      <HydrationBoundaryComponent
        prefetchFunctionArray={[
          (queryClient) => prefetchDashboardMemberList({ queryClient, dashboardId: NumericDashboardId, size: 4 }),
        ]}
      >
        <MemberManageForm dashboardId={NumericDashboardId} />
      </HydrationBoundaryComponent>
      <HydrationBoundaryComponent
        prefetchFunctionArray={[
          (queryClient) => prefetchDashboardInvitationList({ queryClient, dashboardId: NumericDashboardId, size: 5 }),
        ]}
      >
        <InviteeManageForm dashboardId={NumericDashboardId} />
      </HydrationBoundaryComponent>
      <DashboardDeleteButton />
    </ContentsArea>
  );
};

export default DashboardEditPage;
