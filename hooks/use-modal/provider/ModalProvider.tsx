'use client';

import { PropsWithChildren, useMemo, useState } from 'react';

import { useCloseModal } from '@hooks/use-modal/useCloseModal';

import { ModalDispatchContext, ModalStateContext } from '../context/ModalContext';
import { ModalComponent, OpenModalOptions, TModalDispatchContext, ValidModalProps } from '../types';

type ModalProviderProps = PropsWithChildren;

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [openModalOptions, setOpenModalOptions] = useState<OpenModalOptions>({ persist: false });

  const [{ ModalComponent, props }, setModal] = useState<{
    ModalComponent: ModalComponent | null;
    props: ValidModalProps;
  }>({
    ModalComponent: null,
    props: {
      modalRef: null,
    },
  });
  const { isModalOpen, modalRef, toggleModal } = useCloseModal(false, openModalOptions);

  // 양방향 onClose, onOpen, onSubmit 바인딩
  // 열 때 닫을 때 둘 다 callback 받아야 함.
  // props는 모달로 전달할 프롭

  const open: TModalDispatchContext['open'] = ({ ModalComponent, props, options }) => {
    if (isModalOpen === false) {
      toggleModal();
      setModal(() => {
        if (props) {
          return { ModalComponent, props: { ...props, modalRef } };
        }

        return { ModalComponent, props: { modalRef } };
      });
      setOpenModalOptions(options || { persist: false });
    }
  };

  const close = () => {
    if (isModalOpen === true) toggleModal();
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const modalState = { ModalComponent, props, isModalOpen };
  const dispatch = useMemo(() => ({ open, close }), [isModalOpen]);

  return (
    <ModalDispatchContext.Provider value={dispatch}>
      <ModalStateContext.Provider value={modalState}>{children}</ModalStateContext.Provider>
    </ModalDispatchContext.Provider>
  );
};

export default ModalProvider;
