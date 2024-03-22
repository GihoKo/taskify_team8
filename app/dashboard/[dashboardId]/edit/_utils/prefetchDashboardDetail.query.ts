import { QueryClient } from '@tanstack/react-query';

import { dashboardQueryOptions } from '@queries/keys/dashboardKeys';

interface PrefetchDashboardDetailParam {
  queryClient: QueryClient;
  dashboardId: number;
}

export const prefetchDashboardDetail = async ({ queryClient, dashboardId }: PrefetchDashboardDetailParam) => {
  await queryClient.prefetchQuery({
    ...dashboardQueryOptions.dashboardDetail(dashboardId),
  });
};
