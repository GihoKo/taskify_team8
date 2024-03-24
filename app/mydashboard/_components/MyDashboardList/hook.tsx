import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { Dashboard, getDashboardList } from '@apis/dashboards/getDashboardList';

import useModal from '@hooks/use-modal';

export default function useDashboardList() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data: dashboardData, isSuccess } = useQuery({
    queryKey: ['dashboard', 'dashboardList', currentPage],
    queryFn: () => getDashboardList(currentPage),
  });

  const [totalPage, setTotalPage] = useState<number>();
  const [dashboards, setDashboards] = useState<Dashboard[]>(dashboardData?.dashboards || []);

  useEffect(() => {
    if (isSuccess) {
      setDashboards(dashboardData?.dashboards);
      setTotalPage(Math.ceil(dashboardData.totalCount / 5));
    }
  }, [dashboardData, isSuccess, currentPage]);

  const handleNextDashboardPageClick = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousDashboardPageClick = () => {
    setCurrentPage((prev) => prev - 1);
  };

  // 대시보드 생성 버튼 클릭시 모달 오픈
  const { openModal } = useModal();

  const handleCreateDashboardButtonClick = async () => {
    const CreateDashboardModal = await import('@/components/organisms/CreateDashboardModal').then(
      (module) => module.default,
    );

    openModal(CreateDashboardModal);
  };

  return {
    dashboards,
    totalPage,
    currentPage,
    handleNextDashboardPageClick,
    handlePreviousDashboardPageClick,
    handleCreateDashboardButtonClick,
  };
}
