'use client';

import { forwardRef } from 'react';

import styled from 'styled-components';

import { Invitation } from '@apis/invitations/getInitialInvitionList';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import InvitationButton from '../../commons/InvitationButton';
import InvitationText from '../../commons/InvitationText';

type InvitationItemType = Pick<Invitation, 'id' | 'dashboard' | 'inviter'>;

interface InvitationItemProps extends InvitationItemType {
  onAcceptClick: (id: number) => void;
  onRefuseClick: (id: number) => void;
  cursorId: number | null;
}

const InvitationItem = forwardRef<HTMLDivElement, InvitationItemProps>(
  ({ id, dashboard, inviter, onAcceptClick, onRefuseClick, cursorId }, ref) => {
    return (
      <S.Wrapper ref={cursorId === id ? ref : null}>
        <S.NameWrapper>
          <S.DashboardNameWrapper>
            <S.InvitationNamePositioner>
              <InvitationText status='label'>이름</InvitationText>
            </S.InvitationNamePositioner>
            <InvitationText status='content'>{dashboard.title}</InvitationText>
          </S.DashboardNameWrapper>
          <S.InviterNameWrapper>
            <InvitationText status='label'>초대자</InvitationText>
            <InvitationText status='content'>{inviter.nickname}</InvitationText>
          </S.InviterNameWrapper>
        </S.NameWrapper>
        <S.ButtonWrapper>
          <InvitationButton status='accept' onClick={() => onAcceptClick(id)}>
            수락
          </InvitationButton>
          <InvitationButton status='refuse' onClick={() => onRefuseClick(id)}>
            거절
          </InvitationButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    );
  },
);

InvitationItem.displayName = 'InvitationItem';

export default InvitationItem;

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
