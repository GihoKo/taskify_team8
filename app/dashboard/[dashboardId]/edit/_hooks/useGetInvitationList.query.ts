import { useInfiniteQuery } from '@tanstack/react-query';

import { dashboardQueryOptions } from '@queries/keys/dashboardKeys';

interface UseGetInvitationListParam {
  dashboardId: number;
  size?: number;
  currentPage: number;
}

// TODO: useQuery랑 prefetchQuery, placholderData로 바꾸기
export const useGetInvitationList = ({ dashboardId, size = 5, currentPage }: UseGetInvitationListParam) => {
  return useInfiniteQuery({
    ...dashboardQueryOptions.dashboardInvitationList({ dashboardId, size }),
    getNextPageParam: (lastPage, _allPages, lastPageParam, _allPageParams) => {
      if (currentPage >= lastPage.totalCount / size) {
        return undefined;
      }

      return lastPageParam + 1;
    },
    getPreviousPageParam: (_firstPage, _allPages, firstPageParam, _allPageParams) => {
      if (currentPage <= 1) {
        return undefined;
      }

      return firstPageParam - 1;
    },
    select: (data) => ({
      pages: data.pages.flatMap((page) => page.invitations),
      pageParams: data.pageParams,
      totalPages: Math.ceil(data.pages[data.pages.length - 1].totalCount / size),
    }),
    maxPages: 1,
  });
};
