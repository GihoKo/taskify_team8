import { FetchQueryOptions, QueryClient } from '@tanstack/react-query';

interface QueryClientServiceParams extends FetchQueryOptions {}

export type QueryClientService = typeof queryClientService;

export const queryClientService = async (fetchQueryOptions: QueryClientServiceParams) => {
  const queryClient = new QueryClient();
  // await queryClient.prefetchQuery({
  //   queryKey: ['dashboard', 'dashboardList'],
  //   queryFn: () => getDashboardList(1),
  // });
  await queryClient.prefetchQuery(fetchQueryOptions);

  return queryClient;
};
