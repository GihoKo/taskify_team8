'use client';

import { useQuery } from '@tanstack/react-query';

import { membersQueryOptions } from '@queries/keys/membersKeys';

interface UseGetDashboardMemberListparams {
  dashboardId: number;
  size?: number;
}

// TODO: useQuery랑 prefetchQuery, placholderData로 바꾸기
// @see https://tanstack.com/query/latest/docs/framework/react/guides/infinite-queries#what-if-my-api-doesnt-return-a-cursor
export const useGetDashboardMemberList = ({ dashboardId, size = 5 }: UseGetDashboardMemberListparams) => {
  return useQuery(membersQueryOptions.memberInfo({ dashboardId, size }));
};
