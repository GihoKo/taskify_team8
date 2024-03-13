'use client';

import InvitationTitle from './_components/atoms/InvitationTitle';
import InvitationSearchBar from './_components/molecules/InvitationSearchBar';
import DashboardBox from './_components/organisms/DashboardBox';
import InvitationContainer from './_components/organisms/InvitationContainer';

export default function MyDashboardPage() {
  return (
    <>
      <DashboardBox />
      <InvitationTitle />
      <InvitationSearchBar />
      <InvitationContainer />
    </>
  );
}
