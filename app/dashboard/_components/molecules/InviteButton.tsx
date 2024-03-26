'use client';

import AddBox from '@public/images/icons/plus-box-unfilled-w20-h20.svg?component';

import useModal from '@hooks/use-modal';

import ButtonWithIcon, { ButtonWithIconProps } from '../atoms/ButtonWithIcon';

type InviteButtonProps = Omit<ButtonWithIconProps, 'href'>;

const InviteButton = (props: InviteButtonProps) => {
  // 대시보드 생성 버튼 클릭
  const { openModal } = useModal();

  const handleInvitationButtonClick = async () => {
    const InvitationModal = await import('@components/organisms/InvitationModal').then((module) => module.default);

    openModal(InvitationModal, null);
  };

  return (
    <ButtonWithIcon Icon={<AddBox width={'2rem'} height={'2rem'} />} {...props} onClick={handleInvitationButtonClick}>
      초대하기
    </ButtonWithIcon>
  );
};

export default InviteButton;
