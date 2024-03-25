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
    /**
     * @param props - 옵셔널하지 않게 바뀔 예정입니다. prop을 전달하지 않을 거면, null을 넣어주세요.
     */
    props?: ExposedModalPropsWithoutModalRef<MC> | null,
    options?: OpenModalOptions,
  ) => {
    open({ ModalComponent: Component, props, options });
  };

  const closeModal = () => {
    close();
  };

  return { openModal, closeModal };
};
