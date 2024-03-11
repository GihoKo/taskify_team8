'use client';

import { useEffect, useRef } from 'react';

import { OpenModalOptions } from './types';
import { useToggle } from '../useToggle';

const useCloseModal = <T extends HTMLElement>(initialValue = false, openModalOptions?: OpenModalOptions) => {
  const [isModalOpen, toggleModal] = useToggle(initialValue);

  const modalRef = useRef<T | null>(null);

  useEffect(() => {
    const closeModal = (e: MouseEvent) => {
      if (openModalOptions?.persist) return;

      if (isModalOpen && modalRef.current && !modalRef.current.contains(e.target as Node)) {
        toggleModal();
      }
    };

    document.addEventListener('mousedown', closeModal);

    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, [isModalOpen, toggleModal, openModalOptions]);

  return { isModalOpen, modalRef, toggleModal };
};

export { useCloseModal };
