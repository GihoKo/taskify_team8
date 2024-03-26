import { getColumnList } from '@apis/columns/getColumnList';

export const columnsKeys = {
  masterkey: () => ['columns'] as const,
  columnList: (dashboardId: number) => [...columnsKeys.masterkey(), 'columnList', dashboardId] as const,
};

export const columnsQueryOptions = {
  masterKey: () => ({
    queryKey: columnsKeys.masterkey(),
  }),
  columnList: (dashboardId: number) => ({
    queryKey: columnsKeys.columnList(dashboardId),
    queryFn: () => getColumnList(dashboardId),
    staleTime: 0,
  }),
};
