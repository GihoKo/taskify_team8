'use client';

import { useQuery } from '@tanstack/react-query';

import { columnsQueryOptions } from '@queries/keys/columnskeys';

export const useGetColumnList = (dashboardId: number) => {
  return useQuery(columnsQueryOptions.columnList(dashboardId));
};
