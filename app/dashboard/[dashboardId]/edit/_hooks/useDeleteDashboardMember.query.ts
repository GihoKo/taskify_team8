'use client';

import { useMutation } from '@tanstack/react-query';

import { deleteDashboardMember } from '@apis/members/deleteDashboardMember';

export const useDeleteDashboardMember = () => {
  return useMutation({
    mutationFn: deleteDashboardMember,
  });
};
