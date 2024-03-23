import { axiosToken } from '@apis/instance/axiosToken';

// 204
// No Content

// 403
// Forbidden
// {
//   "message": "대시보드 삭제 권한이 없습니다."
// }

// 404
// Not Found
// {
//   "message": "대시보드가 존재하지 않습니다."
// }

export const deleteDashboardMember = async (memberId: number) => {
  const response = await axiosToken.delete(`/members/${memberId}`);

  return response.data;
};
