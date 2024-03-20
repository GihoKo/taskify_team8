import { axiosToken } from '@apis/instance/axiosToken';

// {
//   "id": 0,
//   "title": "string",
//   "color": "string",
//   "createdAt": "2024-03-19T17:17:46.370Z",
//   "updatedAt": "2024-03-19T17:17:46.370Z",
//   "createdByMe": true,
//   "userId": 0
// }

// error case
// 400
// {
//   "message": "수정할 내용을 입력해주세요."
// }

// 403
// {
//   "message": "대시보드 수정 권한이 없습니다."
// }

// 404
// {
//   "message": "대시보드가 존재하지 않습니다."
// }

// TODO: 이걸 어디로 빼야 할까
export interface DashboardInfo {
  id: number;
  title: string;
  color: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  createdByMe: boolean;
  userId: number;
}

type EditDashboardInfoResponse = DashboardInfo;

interface EditDashboardInfoParams {
  title: string;
  color: string;
  dashboardId: number;
}

export const editDashboardInfo = async ({ title, color, dashboardId }: EditDashboardInfoParams) => {
  const response = await axiosToken.put<EditDashboardInfoResponse>(`/dashboards/${dashboardId}`, {
    title,
    color,
  });

  return response.data;
};
