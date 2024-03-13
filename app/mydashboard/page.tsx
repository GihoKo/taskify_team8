'use client';

import InvitationText from './_components/atoms/InvitationText';
import InvitationTitle from './_components/atoms/InvitationTitle';
import InvitationButtonWrapper from './_components/molecules/InvitationButtonWrapper';
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
      <InvitationText type='label'>이름</InvitationText>
      <InvitationText type='content'>프로덕트 디자인</InvitationText>
      <InvitationInviteeName />
    </>
  );
}
