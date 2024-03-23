import { useMutation } from '@tanstack/react-query';

import { cancelDashboardInvitation } from '@apis/dashboards/cancelDashboardInvitation';

export const useCancelDashboardInvitation = () => {
  return useMutation({
    mutationFn: cancelDashboardInvitation,
  });
};
