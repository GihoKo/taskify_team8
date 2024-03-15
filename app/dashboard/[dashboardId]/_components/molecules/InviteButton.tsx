'use client';

import { ButtonHTMLAttributes } from 'react';

import AddBox from '@public/images/icons/add-box-unfilled.svg?component';

import ButtonWithIcon from '../atoms/ButtonWithIcon';

type InviteButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const InviteButton = (props: InviteButtonProps) => {
  return (
    <ButtonWithIcon Icon={<AddBox width={'2rem'} height={'2rem'} />} {...props}>
      초대하기
    </ButtonWithIcon>
  );
};

export default InviteButton;
