'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { editDashboardInfo } from '@apis/dashboards/editDashboardInfo';
import { dashboardKeys } from '@queries/keys/dashboardKeys';

export const useEditDashboardInfo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editDashboardInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: dashboardKeys.masterKey() });
    },
  });
};
