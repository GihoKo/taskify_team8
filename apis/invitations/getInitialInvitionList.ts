import { Dashboard } from '@apis/dashboards/getDashboardList';
import { axiosToken } from '@apis/instance/axiosToken';

export interface Inviter {
  nickname: string;
  email: string;
  id: number;
}

// 초대 받은 대시보드 리스트 조회
export type InvitationListDashboard = Pick<Dashboard, 'title' | 'id'>;

export interface invitee {
  nickname: string;
  email: string;
  id: number;
}

export interface Invitation {
  id: number;
  inviter: Inviter;
  teamId: string;
  dashboard: InvitationListDashboard;
  invitee: invitee;
  inviteAccepted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface InvitationList {
  cursorId: number | null;
  invitations: Invitation[];
}

export const getInitialInvitionList = async () => {
  const { data } = await axiosToken.get<InvitationList>(`/invitations?size=8`);

  return data;
};
