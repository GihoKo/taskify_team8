import { axiosToken } from '@apis/instance/axiosToken';

// {
//   "totalCount": 0,
//   "invitations": [
//     {
//       "id": 0,
//       "inviter": {
//         "nickname": "string",
//         "email": "string",
//         "id": 0
//       },
//       "teamId": "string",
//       "dashboard": {
//         "title": "string",
//         "id": 0
//       },
//       "invitee": {
//         "nickname": "string",
//         "email": "string",
//         "id": 0
//       },
//       "inviteAccepted": true,
//       "createdAt": "2024-03-19T17:39:02.693Z",
//       "updatedAt": "2024-03-19T17:39:02.693Z"
//     }
//   ]
// }

export interface Inviter {
  nickname: string;
  email: string;
  id: number;
}

export interface Dashboard {
  title: string;
  id: number;
}

export interface Invitee {
  nickname: string;
  email: string;
  id: number;
}

export interface Invitation {
  id: number;
  inviter: Inviter;
  teamId: string;
  dashboard: Dashboard;
  invitee: Invitee;
  inviteAccepted: boolean;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface GetInvitationListResponse {
  totalCount: number;
  invitations: Invitation[];
}

interface GetInvitationListParams {
  dashboardId: number;
  page?: number;
  size?: number;
}

export const getInvitationList = async ({ dashboardId, page = 1, size = 5 }: GetInvitationListParams) => {
  const response = await axiosToken.get<GetInvitationListResponse>(`/dashboards/${dashboardId}/invitations`, {
    params: {
      page,
      size,
    },
  });

  return response.data;
};
