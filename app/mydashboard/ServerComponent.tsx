import { PropsWithChildren } from 'react';

import { dehydrate, FetchQueryOptions, HydrationBoundary } from '@tanstack/react-query';

import { queryClientService } from '@utils/queryClientService/queryClientService';

type ServerComponentProps = PropsWithChildren<{
  fetchQueryOptions: FetchQueryOptions;
}>;

// 이거는 그냥 Next.js의 getServerSideProps를 tanstack query로 구현해놓은 게 전부임. + app router방식으로
// 래핑하는 이유 : 서버사이드 렌더링을 위해서(프리 렌더링)
const ServerComponent = async ({ children, fetchQueryOptions }: ServerComponentProps) => {
  const queryClient = await queryClientService(fetchQueryOptions);

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
};

export default ServerComponent;
