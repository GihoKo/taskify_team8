import { axiosToken } from '@apis/instance/axiosToken';

import { DashboardList } from './getDashboardList';

export const getFirstDashboard = async () => {
  const { data } = await axiosToken.get<DashboardList>(`/dashboards?navigationMethod=infiniteScroll&size=1`);

  return data.dashboards[0].id;
};
