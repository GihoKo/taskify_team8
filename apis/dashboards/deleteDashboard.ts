import { axiosToken } from '@apis/instance/axiosToken';

// success case
// 204 // No Content

// error case
// 403
// {
//   "message": "대시보드 삭제 권한이 없습니다."
// }

// 404
// {
//   "message": "대시보드가 존재하지 않습니다."
// }

export const deleteDashboard = async (dashboardId: number) => {
  const response = await axiosToken.delete(`/dashboards/${dashboardId}`);

  return response.status;
};
