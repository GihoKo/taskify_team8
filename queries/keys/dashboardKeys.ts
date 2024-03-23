import { FetchQueryOptions } from '@tanstack/react-query';

import { getDashboardDetailInfo } from '@apis/dashboards/getDashboardDetailInfo';
import { getInvitationList } from '@apis/dashboards/getInvitationList';

export const dashboardKeys = {
  masterKey: () => ['dashboard'] as const,
  dashboardList: () => [...dashboardKeys.masterKey(), 'dashboardList'] as const,
  currentPage: (currentPage: number) => [...dashboardKeys.dashboardList(), currentPage] as const,
  dashboardDetail: (dashboardId: number) => [...dashboardKeys.masterKey(), dashboardId] as const,
  dashboardInvitationList: (dashboardId: number) =>
    [...dashboardKeys.masterKey(), dashboardId, 'invitationList'] as const,
};

type DashboardKeys = typeof dashboardKeys;

/**
 * TODO: 제대로 추론하게 하는 방법 없을까?
 * FetchQueryOptions에 제네릭 타입을 찍어서 넣어주면 될 것 같은데...
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type CustomQueryOptions = {
  // [Key in keyof DashboardKeys]?: DashboardKeys[Key] extends (param: infer R) => unknown
  [Key in keyof DashboardKeys]: DashboardKeys[Key] extends (param: infer R) => unknown
    ? (param: R) => FetchQueryOptions
    : never;
};

// export const dashboardQueryOptions: CustomQueryOptions = {
export const dashboardQueryOptions = {
  masterKey: () => ({
    queryKey: dashboardKeys.masterKey(),
    queryFn: () => {},
  }),
  dashboardList: () => ({
    queryKey: dashboardKeys.dashboardList(),
    queryFn: () => {},
  }),
  currentPage: (currentPage: number) => ({
    queryKey: dashboardKeys.currentPage(currentPage),
    queryFn: () => {},
  }),
  dashboardDetail: (dashboardId: number) => ({
    queryKey: dashboardKeys.dashboardDetail(dashboardId),
    queryFn: () => getDashboardDetailInfo(dashboardId),
    gcTime: 1000 * 60 * 3, // 3분
    staleTime: 1000 * 60 * 1, // 1분
  }),
  dashboardInvitationList: ({
    dashboardId,
    page = 1,
    size,
  }: {
    dashboardId: number;
    page?: number;
    size?: number;
  }) => ({
    queryKey: dashboardKeys.dashboardInvitationList(dashboardId),
    queryFn: ({ pageParam }: { pageParam: number }) => getInvitationList({ dashboardId, page: pageParam, size }),
    initialPageParam: page,
    gcTime: 1000 * 60 * 3, // 3분
    staleTime: 1000 * 60 * 1, // 1분
  }),
};
