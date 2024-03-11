'use client';

import { useContext } from 'react';

import PortalContainer from '@components/portal/Portal';

import { ModalStateContext, useModalDispatch } from '../context/ModalContext';

const Modal = () => {
  const {
    ModalComponent,
    props: { onClose, onSubmit, modalRef, ...rest },
    isModalOpen,
  } = useContext(ModalStateContext);
  const { close } = useModalDispatch();

  const onCloseHandler = (callback?: VoidFunction) => {
    typeof onClose === 'function' && onClose();
    typeof callback === 'function' && callback();
    close();
  };

  const onSubmitHandler = (callback?: VoidFunction) => {
    typeof onSubmit === 'function' && onSubmit();
    typeof callback === 'function' && callback();
    close();
  };

  return (
    <>
      {isModalOpen && ModalComponent && (
        <PortalContainer>
          <ModalComponent
            modalRef={modalRef || null}
            closeModal={onCloseHandler}
            submitModal={onSubmitHandler}
            {...rest}
          />
        </PortalContainer>
      )}
    </>
  );
};

export default Modal;
