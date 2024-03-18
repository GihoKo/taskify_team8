// invitation

export const InvitationMock = [
  { id: 0, dashboardName: '프로덕트 디자인', inviter: '손동희' },
  { id: 1, dashboardName: '새로운 기획 문서', inviter: '안귀영' },
  { id: 2, dashboardName: '유닛 A', inviter: '장혁' },
  { id: 3, dashboardName: '유닛 B', inviter: '감나무' },
  { id: 4, dashboardName: '유닛 C', inviter: '김태현' },
  { id: 5, dashboardName: '유닛 D', inviter: '정혜진' },
];

export const handleInvitationAccept = () => {};

export const handleInvitationRefuse = () => {};

// dashboard

export const dashboardMock = [
  {
    id: 0,
    myDashboard: true,
    Name: '비브리지',
    color: '#D6173A',
  },
  { id: 1, myDashboard: true, Name: '코드잇', color: '#3A7BD6' },
  { id: 2, myDashboard: false, Name: '3분기 계획', color: '#3AD6A8' },
  { id: 3, myDashboard: false, Name: '회의록', color: '#FFD600' },
  { id: 4, myDashboard: false, Name: '중요 문서함', color: '#8A3AD6' },
];

export const PageNationTextMock = {
  total: 10,
  current: 1,
};

export const PagenationPreviouseButtonMock = {
  status: 'previous' as const,
  onClick: () => {},
  disabled: true,
};

export const PageNationNextButtonMock = {
  status: 'next' as const,
  onClick: () => {},
  disabled: false,
};

export const handleCreateDashboardClick = () => {};

export const handleDashboardClick = () => {};
