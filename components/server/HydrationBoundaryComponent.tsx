import { PropsWithChildren } from 'react';

import { FetchQueryOptions, HydrationBoundary } from '@tanstack/react-query';

import { getQueryClient } from '@utils/tanstack-query/getQueryClient';

interface HydrationBoundaryComponentProps extends PropsWithChildren {
  FetchQueryOptions: FetchQueryOptions;
}

const HydrationBoundaryComponent = ({ children, FetchQueryOptions }: HydrationBoundaryComponentProps) => {
  const queryClient = getQueryClient();
  queryClient.prefetchQuery(FetchQueryOptions);

  return <HydrationBoundary>{children}</HydrationBoundary>;
};

export default HydrationBoundaryComponent;
