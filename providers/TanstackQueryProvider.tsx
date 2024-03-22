'use client';

import { PropsWithChildren, useState } from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { styled } from 'styled-components';

import { getQueryClient } from '@lib/tanstack-query/getQueryClient';

/// ////////////////////////////////////////////////////////////
/// //  🚨 주석 지우지 마세요
/// ////////////////////////////////////////////////////////////

// In Next.js, this file would be called: app/providers.jsx

// We can not useState or useRef in a server component, which is why we are
// extracting this part out into it's own file with 'use client' on top

// function makeQueryClient() {
//   return new QueryClient({
//     defaultOptions: {
//       queries: {
//         // With SSR, we usually want to set some default staleTime
//         // above 0 to avoid refetching immediately on the client
//         staleTime: 60 * 1000,
//       },
//     },
//   });
// }

// let browserQueryClient: QueryClient | undefined;

// function getQueryClient() {
//   if (typeof window === 'undefined') {
//     // Server: always make a new query client
//     return makeQueryClient();
//   }

//   // Browser: make a new query client if we don't already have one
//   // This is very important so we don't re-make a new client if React
//   // suspends during the initial render. This may not be needed if we
//   // have a suspense boundary BELOW the creation of the query client
//   if (!browserQueryClient) browserQueryClient = makeQueryClient();

//   return browserQueryClient;
// }

type ProviderProps = PropsWithChildren;

// @see https://medium.com/jumpit/next-js-13-migration-from-jumpit-66e7493d0f17
// const queryClient = getQueryClient();

export default function TanstackQueryProviders({ children }: ProviderProps) {
  // NOTE: Avoid useState when initializing the query client if you don't
  //       have a suspense boundary between this and the code that may
  //       suspend because React will throw away the client on the initial
  //       render if it suspends and there is no boundary
  // const queryClient = getQueryClient();
  // const [queryClient] = useState(() => new QueryClient());
  // const [queryClient] = useState(makeQueryClient);
  const [queryClient] = useState(getQueryClient);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <TextAligner>
        <ReactQueryDevtools initialIsOpen={false} />
      </TextAligner>
    </QueryClientProvider>
  );
}

const TextAligner = styled.div`
  font-size: 16px;
`;
