import { useQuery } from '@tanstack/react-query';

import { dashboardKeys } from '@/queries/keys/dashboardKeys';
import { getDashboardList } from '@apis/dashboards/getDashboardList';

export const useGetDashboardList = (currentPage: number = 1) => {
  return useQuery({
    queryKey: dashboardKeys.currentPage(currentPage), // queryKey: ['dashboard', 'dashboardList', currentPage],
    queryFn: () => getDashboardList(currentPage),
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes
  });
};
