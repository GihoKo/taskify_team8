'use client';

import InvitationLabel from './_components/atoms/InvitationLabel';
import InvitationTitle from './_components/atoms/InvitationTitle';
import InvitationButtonWrapper from './_components/molecules/InvitationButtonWrapper';
import InvitationSearchBar from './_components/molecules/InvitationSearchBar';
import DashboardBox from './_components/organisms/DashboardBox';

export default function MyDashboardPage() {
  return (
    <>
      <DashboardBox />
      <InvitationTitle />
      <InvitationSearchBar />
      <InvitationButtonWrapper />
      <InvitationLabel>이름</InvitationLabel>
      <InvitationLabel>초대자</InvitationLabel>
    </>
  );
}
