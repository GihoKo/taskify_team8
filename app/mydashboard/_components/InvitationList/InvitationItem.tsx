'use client';

import { useEffect } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import { getInvitionList } from '../apis/api';
import InvitationButton from '../commons/InvitationButton';
import InvitationText from '../commons/InvitationText';
import { handleInvitationAccept, handleInvitationRefuse } from '../mock/mock';

interface InvitationProps {
  dashboardName: string;
  inviter: string;
}

// @ToDo 반응형 grid 수정 필요
export default function InvitationItem({ dashboardName, inviter }: InvitationProps) {
  // 초대 리스트 조회
  useEffect(() => {
    (async () => {
      const { invitations } = await getInvitionList();
      console.log(invitations);
    })();
  }, []);

  return (
    <S.Wrapper>
      <S.NameWrapper>
        <S.DashboardNameWrapper>
          <S.InvitationNamePositioner>
            <InvitationText status='label'>이름</InvitationText>
          </S.InvitationNamePositioner>
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
    padding: 1.6rem 2.8rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    @media ${mediaBreakpoint.tablet} {
      display: grid;
      grid-template-columns: 2fr 1fr;
      align-items: center;
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
  InvitationNamePositioner: styled.div``,

  ButtonWrapper: styled.div`
    display: flex;
    gap: 1rem;
  `,
};
