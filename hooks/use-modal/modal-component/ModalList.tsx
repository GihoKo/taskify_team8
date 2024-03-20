'use client';

import { useContext } from 'react';

import PortalContainer from '@components/portal/Portal';

import { ModalListStateContext, useModalListDispatch } from '../context/ModalListContext';
import { ModalComponent } from '../types';

interface SubmitParams {
  onSubmit?: VoidFunction;
  ModalComponent: ModalComponent;
}

interface CloseParams {
  ModalComponent: ModalComponent;
}
type OnSubmitModal = (submitParams: SubmitParams) => () => void;
type OnCloseModal = (closeParams: CloseParams) => () => void;

const ModalList = () => {
  const modalList = useContext(ModalListStateContext);

  const { close } = useModalListDispatch();

  const onSubmitModal: OnSubmitModal =
    ({ onSubmit, ModalComponent }) =>
    () => {
      if (typeof onSubmit === 'function') {
        onSubmit();
      }

      close({ ModalComponent });
    };

  const onCloseModal: OnCloseModal =
    ({ ModalComponent }) =>
    () => {
      close({ ModalComponent });
    };

  return (
    <>
      {modalList.length > 0 && (
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
      )}
    </>
  );
};

export default ModalList;
