import { FetchQueryOptions, QueryClient } from '@tanstack/react-query';

interface CreateQueryClientOnServerComponentParams extends FetchQueryOptions {}

export type QueryClientService = typeof createQueryClientOnServerComponent;

/**
 *
 * getQueryClient 대체 사용
 */
export const createQueryClientOnServerComponent = async (
  fetchQueryOptions: CreateQueryClientOnServerComponentParams,
) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(fetchQueryOptions);

  return queryClient;
};
