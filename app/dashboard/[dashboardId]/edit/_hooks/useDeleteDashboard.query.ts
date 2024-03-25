'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import { deleteDashboard } from '@apis/dashboards/deleteDashboard';
import { dashboardKeys } from '@queries/keys/dashboardKeys';

export const useDeleteDashboard = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: deleteDashboard,
    onSuccess: async (status) => {
      if (status === 204) {
        queryClient.invalidateQueries({ queryKey: dashboardKeys.masterKey() });
        router.push('/mydashboard');
      }
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        switch (error.response?.status) {
          case 403:
            console.error('대시보드 삭제 권한이 없습니다.');

            return;
          case 404:
            console.error('대시보드가 존재하지 않습니다.');

            return;
          default:
            console.error('알 수 없는 에러가 발생했습니다.');

            return;
        }
      }

      console.error('알 수 없는 에러가 발생했습니다.');
    },
  });
};
