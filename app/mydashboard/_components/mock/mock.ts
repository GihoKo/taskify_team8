export const InvitationMock = [
  { id: 0, dashboardName: '프로덕트 디자인', inviter: '손동희' },
  { id: 1, dashboardName: '새로운 기획 문서', inviter: '안귀영' },
  { id: 2, dashboardName: '유닛 A', inviter: '장혁' },
  { id: 3, dashboardName: '유닛 B', inviter: '감나무' },
  { id: 4, dashboardName: '유닛 C', inviter: '김태현' },
  { id: 5, dashboardName: '유닛 D', inviter: '정혜진' },
];

export const dashboardMock = [
  {
    id: 0,
    myDashboard: true,
    title: '비브리지',
    color: 'theme.color.red_D6173A',
  },
  { id: 1, myDashboard: true, title: '코드잇' },
  { id: 2, myDashboard: false, title: '3분기 계획' },
  { id: 3, myDashboard: false, title: '회의록' },
  { id: 4, myDashboard: false, title: '중요 문서함' },
];

export const PageNationTextMock = {
  total: 10,
  current: 1,
};

export const PagenationPreviouseButtonMock = {
  status: 'previous' as const,
  onClick: () => {},
};

export const PageNationNextButtonMock = {
  status: 'next' as const,
  onClick: () => {},
};
