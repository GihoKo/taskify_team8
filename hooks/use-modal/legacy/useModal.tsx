'use client';

import { useState } from 'react';

import {
  ExposedModalPropsWithoutModalRef,
  ModalComponent,
  ModalComponentHasAllRequiredProps,
  OptionalModalProps,
} from '@hooks/use-modal/types';
import { useCloseModal } from '@hooks/use-modal/useCloseModal';

type DirectModalComponentProps = OptionalModalProps;

/**
 * @deprecated use context useModal hook instead
 */
const useModal = () => {
  const [Modal, setModal] = useState<ModalComponent>();

  const [ModalInfo, setModalInfo] = useState<ExposedModalPropsWithoutModalRef<ModalComponent>>();
  const { isModalOpen, toggleModal, modalRef } = useCloseModal();

  const closeModal = (closeModalCallback?: VoidFunction) => {
    if (isModalOpen) {
      toggleModal();

      if (ModalInfo && typeof ModalInfo.onClose === 'function') {
        ModalInfo.onClose();
      }

      if (typeof closeModalCallback === 'function') closeModalCallback();
    }
  };

  const submitModal = (submitModalCallback?: VoidFunction) => {
    if (isModalOpen) {
      toggleModal();

      if (ModalInfo && typeof ModalInfo.onSubmit === 'function') {
        ModalInfo.onSubmit();
      }

      if (typeof submitModalCallback === 'function') submitModalCallback();
    }
  };

  const openModal = <VMC extends ModalComponent>(
    ModalComponent: ModalComponentHasAllRequiredProps<VMC>,
    props?: ExposedModalPropsWithoutModalRef<VMC>,
  ) => {
    if (!isModalOpen) {
      toggleModal();
      setModalInfo(props);
      setModal(() => ModalComponent);
    }
  };

  const ModalComponent = (directProps?: DirectModalComponentProps) => {
    if (!Modal) throw new Error('ModalComponent property should be passed to openModal function');

    return (
      <Modal modalRef={modalRef} closeModal={closeModal} submitModal={submitModal} {...ModalInfo} {...directProps} />
    );
  };

  return { isModalOpen, openModal, ModalInfo, ModalComponent };
};

export { useModal };
