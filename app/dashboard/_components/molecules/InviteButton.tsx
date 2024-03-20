'use client';

import AddBox from '@public/images/icons/plus-box-unfilled-w20-h20.svg?component';

import ButtonWithIcon, { ButtonWithIconProps } from '../atoms/ButtonWithIcon';

type InviteButtonProps = Omit<ButtonWithIconProps, 'href'>;

const InviteButton = (props: InviteButtonProps) => {
  return (
    <ButtonWithIcon Icon={<AddBox width={'2rem'} height={'2rem'} />} {...props}>
      초대하기
    </ButtonWithIcon>
  );
};

export default InviteButton;
