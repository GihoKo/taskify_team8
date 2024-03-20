'use client';

import { useParams } from 'next/navigation';

import ButtonWithIcon, { ButtonWithIconProps } from '../atoms/ButtonWithIcon';
import Cogwheel from '../atoms/Cogwheel';

const ManageButton = (props: ButtonWithIconProps) => {
  const { dashboardId } = useParams<{ dashboardId: string }>();

  return (
    <ButtonWithIcon
      as='a'
      href={`/dashboard/${dashboardId}/edit`}
      Icon={<Cogwheel as='div' fixedSize='2rem' />}
      {...props}
    >
      관리
    </ButtonWithIcon>
  );
};

export default ManageButton;
