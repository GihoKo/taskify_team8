import { axiosToken } from '@apis/instance/axiosToken';
import { DashboardList } from '@interface/dashboard';

// 대시보드 리스트 조회

export interface DashboardListResponse extends DashboardList {
  cursorId: number;
  totalCount: number;
}

export const getDashboardList = async (currentPage: number) => {
  const { data } = await axiosToken.get<DashboardListResponse>(
    `/dashboards?navigationMethod=pagination&page=${currentPage}&size=5`,
  );

  return data;
};
