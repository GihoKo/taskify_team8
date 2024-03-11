'use client';

import { useMemo, useState } from 'react';

import { ModalListDispatchContext, ModalListStateContext } from '../context/ModalsContext';
import { Close, ModalListProviderProps, Open, OpenedModalState } from '../types';

const ModalListProvider = ({ children }: ModalListProviderProps) => {
  const [opendModalList, setOpenedModalList] = useState<OpenedModalState[]>([]);

  const open: Open = ({ ModalComponent, props }) => {
    setOpenedModalList((prev) => {
      if (prev.length === 0) {
        return [{ ModalComponent, props }];
      }

      return [...prev, { ModalComponent, props }];
    });
  };

  const close: Close = ({ ModalComponent }) => {
    setOpenedModalList((prev) => {
      return prev.filter((modal) => modal.ModalComponent !== ModalComponent);
    });
  };

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalListDispatchContext.Provider value={dispatch}>
      <ModalListStateContext.Provider value={opendModalList}>{children}</ModalListStateContext.Provider>
    </ModalListDispatchContext.Provider>
  );
};

export default ModalListProvider;
