import { useInfiniteQuery } from '@tanstack/react-query';

import { dashboardQueryOptions } from '@queries/keys/dashboardKeys';

interface UseGetInvitationListParam {
  dashboardId: number;
  size?: number;
}

export const useGetInvitationList = ({ dashboardId, size = 5 }: UseGetInvitationListParam) => {
  return useInfiniteQuery({
    ...dashboardQueryOptions.dashboardInvitationList({ dashboardId, size }),
    getNextPageParam: (lastPage, allPages, lastPageParam, _allPageParams) => {
      if (allPages.length >= lastPage.totalCount / size) {
        return undefined;
      }

      return lastPageParam + 1;
    },
    getPreviousPageParam: (_firstPage, _allPages, firstPageParam, _allPageParams) => {
      if (firstPageParam <= 1) {
        return undefined;
      }

      return firstPageParam - 1;
    },
    select: (data) => ({
      pages: data.pages.flatMap((page) => page.invitations),
      pageParams: data.pageParams,
      totalPages: Math.ceil(data.pages[data.pages.length - 1].totalCount / size),
    }),
  });
};
