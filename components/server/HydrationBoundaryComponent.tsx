import { PropsWithChildren } from 'react';

import { dehydrate, FetchQueryOptions, HydrationBoundary } from '@tanstack/react-query';

import { getQueryClient } from '@utils/tanstack-query/getQueryClient';

interface HydrationBoundaryComponentProps extends PropsWithChildren {
  FetchQueryOptions: FetchQueryOptions;
}

const HydrationBoundaryComponent = async ({ children, FetchQueryOptions }: HydrationBoundaryComponentProps) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(FetchQueryOptions);

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
};

export default HydrationBoundaryComponent;
