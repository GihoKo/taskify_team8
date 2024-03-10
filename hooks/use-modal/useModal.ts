'use client';

import { useModalDispatch } from './context/ModalContext';
import {
  ExposedModalPropsWithoutModalRef,
  ModalComponent,
  ModalComponentHasAllRequiredProps,
  OpenModalOptions,
} from './types';

export const useModal = () => {
  const { close, open } = useModalDispatch();

  const openModal = <MC extends ModalComponent>(
    Component: ModalComponentHasAllRequiredProps<MC>,
    props?: ExposedModalPropsWithoutModalRef<MC>,
    options?: OpenModalOptions,
  ) => {
    open({ ModalComponent: Component, props, options });
  };

  const closeModal = () => {
    close();
  };

  return { openModal, closeModal };
};
