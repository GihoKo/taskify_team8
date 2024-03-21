import { QueryClient } from '@tanstack/react-query';

import { GetDashboardMemberListResponse } from '@apis/members/getDashboardMemberList';
import { membersQueryOptions } from '@queries/keys/membersKeys';

interface PrefetchDashboardMemberListParam {
  queryClient: QueryClient;
  dashboardId: number;
  size?: number;
}

// @see https://tanstack.com/query/latest/docs/framework/react/guides/prefetching#prefetchquery--prefetchinfinitequery
export const prefetchDashboardMemberList = async ({
  queryClient,
  dashboardId,
  size = 4,
}: PrefetchDashboardMemberListParam) => {
  await queryClient.prefetchInfiniteQuery({
    ...membersQueryOptions.memberList({ dashboardId, size }),
    getNextPageParam: (
      lastPage: GetDashboardMemberListResponse,
      _allPages: GetDashboardMemberListResponse[],
      lastPageParam: number,
    ) => {
      if (lastPage.members.length < size) {
        return undefined;
      }

      return lastPageParam + 1;
    },
    pages: 2, // prefetch the first 2 pages
  });
};
