import { getDashboardMemberList } from '@apis/members/getDashboardMemberList';

export const membersKeys = {
  masterKey: () => ['members'] as const,
  memberList: (dashboardId: number) => [...membersKeys.masterKey(), dashboardId, 'memberList'] as const,
  memberInfo: (dashboardId: number) => [...membersKeys.masterKey(), dashboardId, 'memberInfo'] as const,
};

interface MemberListParam {
  dashboardId: number;
  size?: number;
}

export const membersQueryOptions = {
  masterKey: () => ({
    queryKey: membersKeys.masterKey(),
  }),
  memberList: ({ dashboardId, size = 4 }: MemberListParam) => ({
    queryKey: membersKeys.memberList(dashboardId),
    // 0 이면 null
    queryFn: ({ pageParam }: { pageParam: number }) => getDashboardMemberList({ page: pageParam, size, dashboardId }),
    initialPageParam: 1,
    gcTime: 1000 * 60 * 5, // 5분
    staleTime: 1000 * 60 * 1, // 1분
  }),
  memberInfo: ({ dashboardId, size = 4 }: MemberListParam) => ({
    queryKey: membersKeys.memberInfo(dashboardId),
    queryFn: () => getDashboardMemberList({ page: 1, dashboardId, size }),
    gcTime: 1000 * 60 * 5, // 5분
    staleTime: 1000 * 60 * 1, // 1분
  }),
};
