import { axiosToken } from '@apis/instance/axiosToken';

// 204
// No Content

// 403
// Forbidden
// {
//   "message": "대시보드 초대 취소 권한이 없습니다."
// }

// 404
// Not Found
// {
//   "message": "대시보드가 존재하지 않습니다."
// }

interface CancelDashboardInvitationParam {
  invitationId: number;
  dashboardId: number;
}

export const cancelDashboardInvitation = async ({ dashboardId, invitationId }: CancelDashboardInvitationParam) => {
  const response = await axiosToken.delete(`/dashboards/${dashboardId}/invitations/${invitationId}`);

  return response.data;
};
