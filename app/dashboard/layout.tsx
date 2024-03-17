import { PropsWithChildren } from 'react';

import Page from './_components/atoms/Page';
import DashboardNav from '../../components/organisms/DashboardNav';

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
