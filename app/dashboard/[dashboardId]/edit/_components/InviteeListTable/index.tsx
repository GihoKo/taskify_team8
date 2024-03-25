'use client';

import { Fragment } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useParams } from 'next/navigation';

import { Invitation } from '@apis/dashboards/getInvitationList';
import { dashboardKeys } from '@queries/keys/dashboardKeys';

import { useCancelDashboardInvitation } from '../../_hooks/useCancelDashboardInvitation.query';
import { S } from '../MemberListTable';

interface InviteeListTableProps {
  invitationList: Invitation[];
}

const InviteeListTable = ({ invitationList }: InviteeListTableProps) => {
  const { dashboardId } = useParams<{ dashboardId: string }>();
  const { mutate } = useCancelDashboardInvitation();
  const queryClient = useQueryClient();

  const cancelInvitation = (invitationId: number) => {
    mutate(
      { dashboardId: Number(dashboardId), invitationId },
      {
        onSuccess: async () => {
          queryClient.invalidateQueries({ queryKey: dashboardKeys.dashboardInvitationList(Number(dashboardId)) });
        },
        onError: (error) => {
          if (isAxiosError(error)) {
            switch (error.response?.status) {
              case 403:
                console.log('대시보드 초대 취소 권한이 없습니다.');

                return;
              case 404:
                console.log('대시보드가 존재하지 않습니다.');

                return;
              default:
                console.log('알 수 없는 에러가 발생했습니다.');
            }
          }
        },
      },
    );
  };

  return (
    <S.Wrapper>
      {Boolean(invitationList.length) &&
        invitationList.map(({ invitee: { email }, id }, index) => (
          <Fragment key={id}>
            <S.Row>
              <S.LeftColumn>{email}</S.LeftColumn>
              <S.DeleteButton type='button' onClick={() => cancelInvitation(id)}>
                취소
              </S.DeleteButton>
            </S.Row>
            <S.Border $isLastIndex={index === invitationList.length - 1} />
          </Fragment>
        ))}
    </S.Wrapper>
  );
};

export default InviteeListTable;
