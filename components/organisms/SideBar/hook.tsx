import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { Dashboard, getDashboardList } from '@apis/dashboards/getDashboardList';

import { SIDE_BAR_PAGE_GROUP_NUMBER } from '@components/constants';

import useModal from '@hooks/use-modal';

const useSideBar = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>();

  const { data, isSuccess } = useQuery({
    queryKey: ['dashboard', 'dashboardList', currentPage, SIDE_BAR_PAGE_GROUP_NUMBER],
    queryFn: () => getDashboardList(currentPage, SIDE_BAR_PAGE_GROUP_NUMBER),
  });
  const [dashboards, setDashboards] = useState<Dashboard[]>(data?.dashboards || []);

  const handleNextDashboardPageClick = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousDashboardPageClick = () => {
    setCurrentPage((prev) => prev - 1);
  };

  // 대시보드 리스트 조회
  useEffect(() => {
    if (isSuccess) {
      setDashboards(data?.dashboards);
      setTotalPage(Math.ceil(data.totalCount / SIDE_BAR_PAGE_GROUP_NUMBER));
    }
  }, [data, isSuccess, currentPage]);

  // 대시보드 생성 버튼 클릭
  const { openModal } = useModal();

  const handleCreateDashboardButtonClick = async () => {
    const CreateDashboardModal = await import('@components/organisms/CreateDashboardModal').then(
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
};

export default useSideBar;
