import { QueryClient } from '@tanstack/react-query';

import { columnsQueryOptions } from '@queries/keys/columnskeys';

interface PrefetchColumnListParam {
  queryClient: QueryClient;
  dashboardId: number;
}

export const prefetchColumnList = async ({ queryClient, dashboardId }: PrefetchColumnListParam) => {
  await queryClient.prefetchQuery({
    ...columnsQueryOptions.columnList(dashboardId),
  });
};
