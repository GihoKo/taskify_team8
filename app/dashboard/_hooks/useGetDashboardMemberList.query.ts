'use client';

import { useInfiniteQuery } from '@tanstack/react-query';

import { membersQueryOptions } from '@queries/keys/membersKeys';

interface UseGetDashboardMemberListparams {
  dashboardId: number;
  size?: number;
  currentPage: number;
}

// TODO: useQuery랑 prefetchQuery, placholderData로 바꾸기
// @see https://tanstack.com/query/latest/docs/framework/react/guides/infinite-queries#what-if-my-api-doesnt-return-a-cursor
export const useGetDashboardMemberList = ({ dashboardId, size = 4, currentPage }: UseGetDashboardMemberListparams) => {
  return useInfiniteQuery({
    ...membersQueryOptions.memberList({ dashboardId, size }),
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      if (currentPage >= lastPage.totalCount / size) {
        return undefined;
      }

      return lastPageParam + 1;
    },
    getPreviousPageParam: (_firstPage, _allPages, firstPageParam) => {
      if (currentPage <= 1) {
        return undefined;
      }

      return firstPageParam - 1;
    },
    select: (data) => ({
      pages: data.pages.flatMap((page) => page.members),
      pageParams: data.pageParams,
      totalPages: Math.ceil(data.pages[data.pages.length - 1].totalCount / size),
      totalMemberCount: data.pages[data.pages.length - 1].totalCount,
    }),
    maxPages: 1,
  });
};
