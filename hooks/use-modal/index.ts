import { useModal } from './useModal';

export type { ModalComponent, ModalComponentProps } from './types';

export { useCloseModal } from './useCloseModal';

export { useModalList, useModalListWithoutRef } from './useModalList';

export { default as ModalProvider } from './provider/ModalProvider';

export { default as ModalListProvider } from './provider/ModalListProvider';

export { default as Modal } from './modal-component/Modal';

export { default as ModalList } from './modal-component/Modals';

export default useModal;
