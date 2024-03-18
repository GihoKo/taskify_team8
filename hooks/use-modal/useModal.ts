'use client';

import { useModalDispatch } from './context/ModalContext';
import {
  ExposedModalPropsWithoutModalRef,
  ModalComponent,
  ModalComponentHasAllRequiredProps,
  OpenModalOptions,
} from './types';

/**
 *
 * @example
 * ```ts
 * const { openModal, closeModal } = useModal();
 * const handleModal = () => {
 *   openModal(MyCustomModal, { linkUrl: input, onClose: clearInput });
 * };
 * ```
 */
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
