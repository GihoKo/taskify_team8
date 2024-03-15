import { StaticImageData } from 'next/image';

import dashboardSettingImage from '@public/images/dashboard-setting.png';
import invitationSettingImage from '@public/images/invitation-setting.png';
import membersSettingImage from '@public/images/members-setting.png';

interface landingPageVariousSettings {
  id: number;
  imageSource: StaticImageData;
  title: string;
  description: string;
}

export const LANDING_PAGE_VARIOUS_SETTING_ITEMS: landingPageVariousSettings[] = [
  {
    id: 0,
    imageSource: dashboardSettingImage,
    title: '대시보드 설정',
    description: '대시보드 사진과 이름을 변경할 수 있어요.',
  },
  { id: 1, imageSource: invitationSettingImage, title: '초대', description: '새로운 팀원을 초대할 수 있어요.' },
  { id: 2, imageSource: membersSettingImage, title: '구성원', description: '구성원을 초대하고 내보낼 수 있어요.' },
];
