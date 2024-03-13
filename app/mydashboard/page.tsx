'use client';

import InvitationTitle from './_components/atoms/InvitationTitle';
import InvitationHeader from './_components/molecules/InvitationHeader';
import InvitationSearchBar from './_components/molecules/InvitationSearchBar';
import DashboardBox from './_components/organisms/DashboardBox';
import InvitationItem from './_components/organisms/InvitationItem';

export default function MyDashboardPage() {
  return (
    <>
      <DashboardBox />
      <InvitationTitle />
      <InvitationSearchBar />
      <InvitationHeader />
      <InvitationItem />
    </>
  );
}
