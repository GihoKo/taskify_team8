import { device } from '@styles/mediaBreakpoint';

type GetVisibleProfileListCountParams = {
  membersCount: number;
  resizeInfo: DOMRect | null;
};

export const getVisibleProfileListCount = ({ membersCount, resizeInfo }: GetVisibleProfileListCountParams): number => {
  if (membersCount === 0) {
    return 0;
  }

  if (resizeInfo) {
    if (resizeInfo.width < Number(device.pc)) {
      return 2;
    }

    return 4;
  }

  return 0;
};
