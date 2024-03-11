'use client';

import { MutableRefObject, useEffect, useRef } from 'react';

import { useModalListDispatch } from './context/ModalsContext';
import {
  CloseModal,
  ModalComponent,
  OpenModalImpl,
  OpenModalOptions,
  OpenModalWithModalRef,
  OpenModalWithoutModalRef,
} from './types';

const useModalListImpl = () => {
  const { close, open } = useModalListDispatch();

  const openModalImpl: OpenModalImpl = (ModalComponent, props) => {
    open({ ModalComponent, props });
  };

  const closeModal: CloseModal = ({ ModalComponent }) => {
    close({ ModalComponent });
  };

  return { openModalImpl, closeModal };
};

/**
 * @dreprecated {@link useModalList} is recommended
 */
export const useModalListWithoutRef = () => {
  const { close, open } = useModalListDispatch();

  const openModal: OpenModalWithoutModalRef = (ModalComponent, props) => {
    open({ ModalComponent, props });
  };

  const closeModal: CloseModal = ({ ModalComponent }) => {
    close({ ModalComponent });
  };

  return { openModal, closeModal };
};

/**
 * use multi overlapped modals
 */
export const useModalList = <MC extends ModalComponent, T extends HTMLElement>() => {
  const { openModalImpl, closeModal } = useModalListImpl();

  const modalMapRef = useRef<
    Map<MutableRefObject<T | null> | null, { ModalComponent: MC; options?: OpenModalOptions }>
  >(new Map());

  const openModal: OpenModalWithModalRef = (ModalComponent, props, options) => {
    openModalImpl(ModalComponent, props);

    if (typeof props === 'object' && props !== null && props.modalRef) {
      modalMapRef.current.set(props.modalRef, { ModalComponent: ModalComponent as unknown as MC, options });
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
