import { QueryClient } from '@tanstack/react-query';

import { GetInvitationListResponse } from '@apis/dashboards/getInvitationList';
import { dashboardQueryOptions } from '@queries/keys/dashboardKeys';

interface PrefetchDashboardInvitationListParam {
  queryClient: QueryClient;
  dashboardId: number;
  size?: number;
}

export const prefetchDashboardInvitationList = async ({
  queryClient,
  dashboardId,
  size = 5,
}: PrefetchDashboardInvitationListParam) => {
  await queryClient.prefetchInfiniteQuery({
    ...dashboardQueryOptions.dashboardInvitationList({ dashboardId, size }),
    getNextPageParam: (
      lastPage: GetInvitationListResponse,
      _allPages: GetInvitationListResponse[],
      lastPageParam: number,
    ) => {
      if (lastPage.invitations.length < size) {
        return undefined;
      }

      return lastPageParam + 1;
    },
  });
};
