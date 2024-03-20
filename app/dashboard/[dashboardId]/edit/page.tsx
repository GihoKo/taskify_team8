import { dashboardQueryOptions } from '@queries/keys/dashboardKeys';

import HydrationBoundaryComponent from '@components/server/HydrationBoundaryComponent';

import ArrowLeftIconButton from './_components/ArrowLeftIconButton';
import ContentsArea from './_components/ContentArea';
import DashboardDeleteButton from './_components/DashboardDeleteButton';
import DashboardInfoEditForm from './_components/DashboardInfoEditForm';
import InviteeManageForm from './_components/InviteeManageForm';
import MemberManageForm from './_components/MemberManageForm';
import { dashboardMemberList } from './_constants/mocks';

const DashboardEditPage = ({ params }: { params: { dashboardId: string } }) => {
  console.log(params.dashboardId);
  const dashboardId = Number(params.dashboardId);

  return (
    <ContentsArea>
      <ArrowLeftIconButton>돌아가기</ArrowLeftIconButton>
      <HydrationBoundaryComponent FetchQueryOptions={dashboardQueryOptions.dashboardDetail(dashboardId)}>
        <DashboardInfoEditForm dashboardId={dashboardId} />
      </HydrationBoundaryComponent>
      <MemberManageForm {...dashboardMemberList} />
      <InviteeManageForm />
      <DashboardDeleteButton />
    </ContentsArea>
  );
};

export default DashboardEditPage;
