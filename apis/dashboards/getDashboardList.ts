import { axiosToken } from '@apis/instance/axiosToken';

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

export const getDashboardList = async (currentPage: number, size = 5) => {
  const { data } = await axiosToken.get<DashboardList>(
    `/dashboards?navigationMethod=pagination&page=${currentPage}&size=${size}`,
  );

  return data;
};
