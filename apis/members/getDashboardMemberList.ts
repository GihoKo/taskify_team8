import { axiosToken } from '@apis/instance/axiosToken';

// 404
// Not Found

// {
//   "message": "대시보드의 멤버가 아닙니다."
// }

export interface Member {
  id: number;
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl?: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  isOwner: boolean;
}

export interface GetDashboardMemberListResponse {
  members: Member[];
  totalCount: number;
}

interface GetDashboardMemberListParams {
  page: number;
  size: number;
  dashboardId: number;
}

export const getDashboardMemberList = async ({ page, size, dashboardId }: GetDashboardMemberListParams) => {
  const response = await axiosToken.get<GetDashboardMemberListResponse>('/members', {
    params: {
      page,
      size,
      dashboardId,
    },
  });

  return response.data;
};
