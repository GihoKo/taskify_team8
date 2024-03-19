import { instanceAddedAccessToken } from '../instance';

// 대시보드 리스트 조회
export interface Dashboard {
  id: number;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
  userId: number;
}

export interface DashboardList {
  cursorId: number;
  totalCount: number;
  dashboards: Dashboard[];
}

export const getDashboardList = async (currentPage: number) => {
  const { data } = await instanceAddedAccessToken.get<DashboardList>(
    `/dashboards?navigationMethod=pagination&page=${currentPage}&size=5`,
  );

  return data;
};

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
  const { data } = await instanceAddedAccessToken.get<InvitationList>(`/invitations?size=6`);

  return data;
};

export const getMoreInvitionList = async (cursorId: number | null) => {
  const { data } = await instanceAddedAccessToken.get<InvitationList>(`/invitations?cursorId=${cursorId}&size=6`);

  return data;
};

// 초대 답변
interface InvitationAnswer {
  inviteAccepted: boolean;
}

export const putInvitationAnswer = async (invitationId: number, answer: boolean) => {
  const { data } = await instanceAddedAccessToken.put<InvitationAnswer>(`/invitations/${invitationId}`, {
    inviteAccepted: answer,
  });

  return data;
};
