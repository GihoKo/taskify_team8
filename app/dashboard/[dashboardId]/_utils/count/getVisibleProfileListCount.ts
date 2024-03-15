import { device } from '@styles/mediaBreakpoint';

type getVisibleProfileListCountParams = {
  membersCount: number;
  resizeInfo: DOMRect | null;
};

export const getVisibleProfileListCount = ({ membersCount, resizeInfo }: getVisibleProfileListCountParams): number => {
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
