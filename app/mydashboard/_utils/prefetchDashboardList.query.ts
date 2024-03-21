import { QueryClient } from '@tanstack/react-query';

import { getDashboardList } from '@apis/dashboards/getDashboardList';
import { getInitialInvitionList } from '@apis/invitations/getInitialInvitionList';

interface PrefetchDashboardListParam {
  queryClient: QueryClient;
}

export const prefetchDashboardList = async ({ queryClient }: PrefetchDashboardListParam) => {
  await queryClient.prefetchQuery({
    queryKey: ['dashboard', 'dashboardList', 1],
    queryFn: () => getDashboardList(1),
  });
};

interface PrefetchInvitationListParam {
  queryClient: QueryClient;
}

export const prefetchInvitationList = async ({ queryClient }: PrefetchInvitationListParam) => {
  await queryClient.prefetchQuery({
    queryKey: ['invitation', 'invitationList'],
    queryFn: getInitialInvitionList,
  });
};
