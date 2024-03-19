import { axiosToken } from '@apis/instance/axiosToken';
import { DashboardList } from '@interface/dashboard';

// 첫번 째 대시보드 id 조회
export const getFirstDashboardId = async () => {
  const { data } = await axiosToken.get<DashboardList>(`/dashboards?navigationMethod=infiniteScroll&size=1`);

  return data.dashboards[0].id;
};
