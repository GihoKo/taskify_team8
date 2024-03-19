import { PropsWithChildren } from 'react';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getDashboardList } from '@apis/dashboards/getDashboardList';

type ServerComponentProps = PropsWithChildren;

const ServerComponent2 = async ({ children }: ServerComponentProps) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['dashboard', 'dashboardList', 3],
    queryFn: () => getDashboardList(3),
  });

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
};

export default ServerComponent2;
