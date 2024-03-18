import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import InvitationButton from '../commons/InvitationButton';
import InvitationText from '../commons/InvitationText';
import { handleInvitationAccept, handleInvitationRefuse } from '../mock/mock';

interface InvitationProps {
  dashboardName: string;
  inviter: string;
}

// @ToDo 반응형 grid 수정 필요
export default function InvitationItem({ dashboardName, inviter }: InvitationProps) {
  return (
    <S.Wrapper>
      <S.NameWrapper>
        <S.DashboardNameWrapper>
          <InvitationText status='label'>이름</InvitationText>
          <InvitationText status='content'>{dashboardName}</InvitationText>
        </S.DashboardNameWrapper>
        <S.InviterNameWrapper>
          <InvitationText status='label'>초대자</InvitationText>
          <InvitationText status='content'>{inviter}</InvitationText>
        </S.InviterNameWrapper>
      </S.NameWrapper>
      <S.ButtonWrapper>
        <InvitationButton status='accept' onClick={handleInvitationAccept}>
          수락
        </InvitationButton>
        <InvitationButton status='refuse' onClick={handleInvitationRefuse}>
          거절
        </InvitationButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    border-bottom: 0.1rem solid ${({ theme }) => theme.color.gray_EEEEEE};
    padding: 0rem 1.6rem;
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

  DashboardNameWrapper: styled.span`
    display: flex;
    gap: 2.8rem;
  `,

  InviterNameWrapper: styled.span`
    display: flex;
    gap: 1.6rem;
  `,

  ButtonWrapper: styled.div`
    display: flex;
    gap: 1rem;
  `,
};
