import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import InvitationButtonWrapper from '../molecules/InvitationButtonWrapper';
import InvitationDashboardName from '../molecules/InvitationDashboardName';
import InvitationInviteeName from '../molecules/InvitationInviterName';

interface Props {
  dashboardName: string;
  inviter: string;
}

// @ToDo 반응형 grid 수정 필요
export default function InvitationItem({ dashboardName, inviter }: Props) {
  return (
    <S.Wrapper>
      <S.NameWrapper>
        <InvitationDashboardName dashboardName={dashboardName} />
        <InvitationInviteeName inviter={inviter} />
      </S.NameWrapper>
      <InvitationButtonWrapper />
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    border-bottom: 0.1rem solid ${({ theme }) => theme.color.gray_EEEEEE};
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding-top: 1.6rem;
    padding-bottom: 1.6rem;

    @media ${mediaBreakpoint.tablet} {
      display: grid;
      grid-template-columns: 2fr 1fr;
      align-items: center;
      padding-top: 2rem;
      padding-bottom: 2rem;
      gap: 0;
    }
  `,

  NameWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media ${mediaBreakpoint.tablet} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0;
    }
  `,
};
