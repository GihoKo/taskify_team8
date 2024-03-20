import { axiosToken } from '@apis/instance/axiosToken';

import { DashboardInfo } from './editDashboardInfo';

type GetDashboardDetailInfoResponse = DashboardInfo;

export const getDashboardDetailInfo = async (dashboardId: number) => {
  const response = await axiosToken.get<GetDashboardDetailInfoResponse>(`/dashboards/${dashboardId}`);

  return response.data;
};
