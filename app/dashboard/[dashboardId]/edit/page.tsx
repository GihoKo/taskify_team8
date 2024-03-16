import ArrowLeftIconButton from './_components/ArrowLeftIconButton';
import ContentsArea from './_components/ContentArea';
import DashboardDeleteButton from './_components/DashboardDeleteButton';
import DashboardInfoEditForm from './_components/DashboardInfoEditForm';
import InviteeManageForm from './_components/InviteeManageForm';
import MemberManageForm from './_components/MemberManageForm';
import { dashboardMemberList } from './_constants/mocks';

const DashboardEditPage = () => {
  return (
    <ContentsArea>
      <ArrowLeftIconButton>돌아가기</ArrowLeftIconButton>
      <DashboardInfoEditForm />
      <MemberManageForm {...dashboardMemberList} />
      <InviteeManageForm />
      <DashboardDeleteButton />
    </ContentsArea>
  );
};

export default DashboardEditPage;
