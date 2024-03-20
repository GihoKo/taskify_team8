'use client';

import { useQuery } from '@tanstack/react-query';

import { dashboardQueryOptions } from '@queries/keys/dashboardKeys';

export const useGetDashboardDetailInfo = (dashboardId: number) => {
  return useQuery(dashboardQueryOptions.dashboardDetail(dashboardId));
};
