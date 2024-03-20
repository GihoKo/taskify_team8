import { cache } from 'react';

import { QueryClient } from '@tanstack/react-query';

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000,
      },
    },
  });
}

/**
 * singleton query client
 */
export const getQueryClient = cache(makeQueryClient);
// export const getQueryClient = cache(() => new QueryClient());
