'use client';

import InvitationTitle from './_components/atoms/InvitationTitle';
import InvitationButtonWrapper from './_components/molecules/InvitationButtonWrapper';
import InvitationDashboardName from './_components/molecules/InvitationDashboardName';
import InvitationInviteeName from './_components/molecules/InvitationInviteeName';
import InvitationSearchBar from './_components/molecules/InvitationSearchBar';
import DashboardBox from './_components/organisms/DashboardBox';

export default function MyDashboardPage() {
  return (
    <>
      <DashboardBox />
      <InvitationTitle />
      <InvitationSearchBar />
      <InvitationButtonWrapper />
      <InvitationDashboardName />
      <InvitationInviteeName />
    </>
  );
}
