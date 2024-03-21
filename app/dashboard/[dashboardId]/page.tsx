import HydrationBoundaryComponent from '@components/server/HydrationBoundaryComponent';

import ColumnContainer from './_components/atoms/ColumnContainer';
import DashboardContentsArea from './_components/atoms/DashboardContentsArea';
import ColumnContainerGroup from './_components/ColumContainerGroup';
import ColumnAppendButton from './_components/molecules/ColumnAppendButton';
import { prefetchColumnList } from './_utils/prefetchColumnList.query';

export interface DashboardPageParams {
  params: {
    dashboardId: string;
  };
}

const DashboardPage = ({ params }: DashboardPageParams) => {
  const { dashboardId } = params;
  const NumericDashboardId = Number(dashboardId);

  return (
    <>
      <DashboardContentsArea>
        <HydrationBoundaryComponent
          prefetchFunctionArray={[
            (queryClient) => prefetchColumnList({ dashboardId: NumericDashboardId, queryClient }),
          ]}
        >
          <ColumnContainerGroup dashboardId={NumericDashboardId} />
        </HydrationBoundaryComponent>
        <ColumnContainer isLastColumn>
          <ColumnAppendButton dashboardId={NumericDashboardId} />
        </ColumnContainer>
      </DashboardContentsArea>
    </>
  );
};

export default DashboardPage;
