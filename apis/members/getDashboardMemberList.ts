import { axiosToken } from '@apis/instance/axiosToken';

// {
//   "members": [
//     {
//       "id": 0,
//       "userId": 0,
//       "email": "string",
//       "nickname": "string",
//       "profileImageUrl": "string",
//       "createdAt": "2024-03-19T17:00:39.373Z",
//       "updatedAt": "2024-03-19T17:00:39.373Z",
//       "isOwner": true
//     }
//   ],
//   "totalCount": 0
// }

interface Member {
  id: number;
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  isOwner: boolean;
}

interface GetDashboardMemberListResponse {
  members: Member[];
  totalCount: number;
}

interface GetDashboardMemberList {
  page: number;
  size: number;
  dashboardId: number;
}

export const getDashboardMemberList = async ({ page, size, dashboardId }: GetDashboardMemberList) => {
  const response = await axiosToken.get<GetDashboardMemberListResponse>('/members', {
    params: {
      page,
      size,
      dashboardId,
    },
  });

  return response.data;
};