'use client';

import { MutableRefObject, useEffect, useRef } from 'react';

import { useModalListDispatch } from './context/ModalListContext';
import {
  CloseModal,
  ModalComponent,
  ModalComponentHasAllRequiredProps,
  OpenModalListImpl,
  OpenModalListWithModalRef,
  OpenModalListWithoutModalListRef,
  OpenModalOptions,
} from './types';

const useModalListImpl = () => {
  const { close, open } = useModalListDispatch();

  const openModalListImpl: OpenModalListImpl = (ModalComponent, props) => {
    open({ ModalComponent, props });
  };

  const closeModal: CloseModal = ({ ModalComponent }) => {
    close({ ModalComponent });
  };

  return { openModalListImpl, closeModal };
};

/**
 * @dreprecated {@link useModalList} is recommended
 */
export const useModalListWithoutRef = () => {
  const { close, open } = useModalListDispatch();

  const openModal: OpenModalListWithoutModalListRef = (ModalComponent, props) => {
    open({ ModalComponent, props });
  };

  const closeModal: CloseModal = ({ ModalComponent }) => {
    close({ ModalComponent });
  };

  return { openModal, closeModal };
};

/**
 * use for multi layer modalList
 *
 * @example
 * ```ts
 * const modalRef = useRef<HTMLElemet>(null);
 * const { openModal, closeModal } = useModal();
 * const handleModal = () => {
 *   openModal(MyCustomModal, { modalRef, linkUrl: input, onClose: clearInput });
 * };
 * ```
 */
export const useModalList = () => {
  const { openModalListImpl, closeModal } = useModalListImpl();

  const modalMapRef = useRef<
    Map<
      MutableRefObject<HTMLElement | null> | null,
      { ModalComponent: ModalComponentHasAllRequiredProps<ModalComponent>; options?: OpenModalOptions }
    >
  >(new Map());

  const openModal: OpenModalListWithModalRef = (ModalComponent, props, options) => {
    openModalListImpl(ModalComponent, props);

    if (typeof props === 'object' && props !== null && props.modalRef) {
      // 이미 Map에 먼저 저장된 props.modalRef가 null일 때, 또 다른 props.modalRef가 null인 ModalComponent가 들어와서 기존 null에 매핑되어 있던 ModalComponent가 대체되어도 상관없음.
      // modalMapRef.current는 어차피 매핑 키로 들어오는 props.modalRef가 null이면, 매핑된 모달이 교체되든 말든 mousedown으로 닫을 필요가 없어지는 컴포넌트들로 취급할 것임.
      // useEffect안의 ref 조건문이 그 역할을 수행하는 부분임.
      modalMapRef.current.set(props.modalRef, {
        ModalComponent,
        options,
      });
    }
  };

  useEffect(() => {
    const close = (e: MouseEvent) => {
      modalMapRef.current.forEach(({ ModalComponent, options }, ref) => {
        if (options?.persist) return;

        if (ref && ref.current && !ref.current.contains(e.target as Node)) {
          closeModal({ ModalComponent });
        }
      });
    };

    document.addEventListener('mousedown', close);

    return () => document.removeEventListener('mousedown', close);
  }, []);

  return { openModal, closeModal };
};
