'use client';

import { useContext } from 'react';

import PortalContainer from '@components/portal/Portal';

import { ModalListStateContext, useModalListDispatch } from '../context/ModalsContext';
import { ModalComponent } from '../types';

interface SubmitParams {
  onSubmit?: VoidFunction;
  ModalComponent: ModalComponent;
}

interface CloseParams {
  ModalComponent: ModalComponent;
}
type OnSubmitModal = (submitParams: SubmitParams) => (callback?: VoidFunction) => void;
type OnCloseModal = (closeParams: CloseParams) => (callback?: VoidFunction) => void;

const ModalList = () => {
  const modalList = useContext(ModalListStateContext);

  const { close } = useModalListDispatch();

  const onSubmitModal: OnSubmitModal =
    ({ onSubmit, ModalComponent }) =>
    (callback) => {
      if (typeof onSubmit === 'function') {
        onSubmit();
      }

      if (typeof callback === 'function') {
        callback();
      }

      close({ ModalComponent });
    };

  const onCloseModal: OnCloseModal =
    ({ ModalComponent }) =>
    (callback) => {
      if (typeof callback === 'function') {
        callback();
      }

      close({ ModalComponent });
    };

  return (
    <PortalContainer>
      {modalList.map((modal) => {
        const { ModalComponent, props } = modal;

        return (
          <ModalComponent
            key={ModalComponent.name}
            modalRef={props?.modalRef || null}
            submitModal={onSubmitModal({ onSubmit: props?.onSubmit, ModalComponent })}
            closeModal={onCloseModal({ ModalComponent })}
            {...props}
          />
        );
      })}
    </PortalContainer>
  );
};

export default ModalList;
