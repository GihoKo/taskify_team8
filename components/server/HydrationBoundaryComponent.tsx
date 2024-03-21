import { PropsWithChildren } from 'react';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getQueryClient } from '@lib/tanstack-query/getQueryClient';
import { logOnDev } from '@utils/logger/logOnDev';

type PrefetchFunction = (queryClient: QueryClient) => Promise<void>;

type HydrationBoundaryComponentProps = PropsWithChildren<{
  prefetchFunctionArray: PrefetchFunction[];
}>;

const HydrationBoundaryComponent = async ({ children, prefetchFunctionArray }: HydrationBoundaryComponentProps) => {
  const queryClient = getQueryClient();

  // @see https://tanstack.com/query/latest/docs/framework/react/guides/prefetching#prefetch-in-event-handlers
  // Prefetch only fires when data is older than the staleTime,
  await Promise.all([...prefetchFunctionArray.map((prefetchFunctionArray) => prefetchFunctionArray(queryClient))])
    .then(() => {
      logOnDev('😃 Prefetch Succeed on HydrationBoundaryComponent');
    })
    .catch((error) => {
      logOnDev('🤔❓Something has gone wrong with Promise.all on HydrationBoundaryComponent');
      logOnDev(error);
    });

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
};

export default HydrationBoundaryComponent;
