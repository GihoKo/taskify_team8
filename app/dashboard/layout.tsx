import { PropsWithChildren } from 'react';

import DashboardNav from '@components/organisms/DashboardNav';
import SideBar from '@components/organisms/SideBar';

import Page from './_components/atoms/Page';
import ContentsArea from './_components/molecules/ContentsArea';

type DashboardLayoutProps = PropsWithChildren;

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <Page>
      <SideBar />
      <ContentsArea>
        <DashboardNav />
        {children}
      </ContentsArea>
    </Page>
  );
};

export default DashboardLayout;
