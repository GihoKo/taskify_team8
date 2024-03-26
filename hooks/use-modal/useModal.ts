'use client';

import { useModalDispatch } from './context/ModalContext';
import { OpenModal, UseModal } from './types';

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
export const useModal: UseModal = () => {
  const { close, open } = useModalDispatch();

  /**
   * @param props - 옵셔널하지 않게 바뀔 예정입니다. prop을 전달하지 않을 거면, null을 넣어주세요.
   */
  const openModal: OpenModal = (Component, props, options?) => {
    open({
      ModalComponent: Component,
      props,
      options,
    });
  };

  const closeModal = () => {
    close();
  };

  return { openModal, closeModal };
};
