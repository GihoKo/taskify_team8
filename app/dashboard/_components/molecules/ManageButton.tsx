'use client';

import { ButtonHTMLAttributes } from 'react';

import ButtonWithIcon from '../atoms/ButtonWithIcon';
import Cogwheel from '../atoms/Cogwheel';

type ManageButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ManageButton = (props: ManageButtonProps) => {
  return (
    <ButtonWithIcon Icon={<Cogwheel as='div' fixedSize='2rem' />} {...props}>
      관리
    </ButtonWithIcon>
  );
};

export default ManageButton;
