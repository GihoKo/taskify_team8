'use client';

import InvitationTitle from './_components/atoms/InvitationTitle';
import SearchIcon from './_components/atoms/SearchIcon';
import DashboardBox from './_components/organisms/DashboardBox';

export default function MyDashboardPage() {
  return (
    <>
      <DashboardBox />
      <InvitationTitle />
      <SearchIcon />
    </>
  );
}
