import { PropsWithChildren } from 'react';

import DashboardNav from '@components/organisms/DashboardNav';

import Page from './_components/atoms/Page';

type DashboardLayoutProps = PropsWithChildren;

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <Page>
      <DashboardNav />
      {children}
    </Page>
  );
};

export default DashboardLayout;
