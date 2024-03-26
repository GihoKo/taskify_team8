import { ComponentProps, ComponentType, MutableRefObject, PropsWithChildren } from 'react';

export type Obj = {
  [key: string]: any;
};

type Key = keyof Obj;

type ModalComponentOrObj = ModalComponentSuperSet | Obj;

export type ValidModalProps = ModalHandler & Obj;

export type SetPickedPropToRequired<T extends Obj, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

export interface OptionalModalProps {
  closeModal?: () => void;
  submitModal?: () => void;
  modalRef?: MutableRefObject<HTMLElement | null> | null;
}

export interface OpenModalOptions {
  persist?: boolean;
}

export type RequiredModalProps = Required<OptionalModalProps>;
type HasCloseModal = SetPickedPropToRequired<OptionalModalProps, 'closeModal'>;
type HasModalRef = SetPickedPropToRequired<OptionalModalProps, 'modalRef'>;
type HasSubmitModal = SetPickedPropToRequired<OptionalModalProps, 'submitModal'>;

export interface ModalHandler {
  onClose?: () => void;
  onOpen?: () => void;
  onSubmit?: () => void;
  modalRef?: MutableRefObject<HTMLElement | null> | null;
}

export interface OpenedModalState {
  ModalComponent: ModalComponent;
  props?: ValidModalProps;
}

/**
 * base modalcomponent type
 *
 * @example
 * ```tsx
 * const MyModal: ModalComponent<{ userName: string; }> = ({ closeModal, modalRef, submitModal, userName }) => {
 *  return (
 *     <div ref={(node) => {
 *         if (modalRef) modalRef.current = node;
 *       }}>
 *        </h1>{userName}</h1>
 *       <button onClick={closeModal}>close</button>
 *       <button onClick={submitModal}>submit</button>
 *     </div>
 *  );
 * };
 * ```
 */

export type ModalComponent<CustomComponentProps = unknown> = ComponentType<CustomComponentProps & RequiredModalProps>;

type ModalComponentSuperSet = ModalComponent<any>;

/**
 * modalcomponent props
 *
 * @example
 * ```tsx
 * const MyModal = ({ closeModal, modalRef, submitModal, userName }: ModalComponentProps<{ userName: string; }>) => {
 *   return (
 *     <div ref={ref={(node) => {
 *         if (modalRef) modalRef.current = node;
 *       }}>
 *       <h1>{userName}</h1>
 *       <button onClick={closeModal}>close</button>
 *       <button onClick={submitModal}>submit</button>
 *     </div>
 *  );
 * };
 * ```
 */
export type ModalComponentProps<CustomComponentProps = unknown> = CustomComponentProps extends Obj
  ? ComponentProps<ModalComponent<CustomComponentProps>>
  : ComponentType<CustomComponentProps & RequiredModalProps>;

type InternalModalComponentProps<T extends ModalComponentSuperSet> =
  T extends ModalComponent<infer R> ? R & ModalHandler : ModalHandler;

/**
 * * 함수의 인자 검증 부분에서 사용
 * * ModalComponent는 OptionalModalProp중 closeModal prop이 필수로 있어야 한다.
 */
export type ModalComponentHasCloseModal<T extends ModalComponent> = ComponentProps<T> extends HasCloseModal ? T : never;

/**
 * for component validation (whether has modalRef)
 */
export type ModalComponentHasModalRef<T extends ModalComponent> = ComponentProps<T> extends HasModalRef ? T : never;

/**
 * for component validation (whether has submitModal)
 */
export type ModalComponentHasSubmitModal<T extends ModalComponent> =
  ComponentProps<T> extends HasSubmitModal ? T : never;

/**
 * * 함수의 인자 검증 부분에서 사용
 * * ModalComponent는 모든 OptionalModalProp이 필수로 있어야 한다.
 */
export type ModalComponentHasAllRequiredProps<T extends ModalComponent> =
  ComponentProps<T> extends RequiredModalProps ? T : never;

export type Without<T extends ModalComponentOrObj, K extends Key> = T extends ModalComponentSuperSet
  ? Omit<InternalModalComponentProps<T>, K>
  : T extends Obj
    ? Omit<T, K>
    : never;

// TODO: Union type would be more simple than multiple Without types
export type ModalComponentPropsWithoutModalRef<T extends ModalComponentOrObj> = Without<T, 'modalRef'>;

export type ModalComponentPropsWithoutCloseModal<T extends ModalComponentOrObj> = Without<T, 'closeModal'>;

export type ModalComponentPropsWithoutSubmitModal<T extends ModalComponentOrObj> = Without<T, 'submitModal'>;

export type ExposedModalProps<T extends ModalComponentSuperSet> = ModalComponentPropsWithoutSubmitModal<
  ModalComponentPropsWithoutCloseModal<T>
> &
  ModalHandler;

export type ExposedModalPropsWithoutModalRef<T extends ModalComponentSuperSet> = ModalComponentPropsWithoutModalRef<
  ExposedModalProps<T>
> &
  Omit<ModalHandler, 'modalRef'>;

/// ////////////////////////////////////////////////////////////////////////////////////
/// for multi layer modals
/// ////////////////////////////////////////////////////////////////////////////////////

export type Open = <VMC extends ModalComponent>({
  ModalComponent,
  props,
}: {
  ModalComponent: VMC;
  props?: ExposedModalProps<VMC> | ExposedModalPropsWithoutModalRef<VMC> | null;
}) => void;

export type Close = <VMC extends ModalComponent>({ ModalComponent }: { ModalComponent: VMC }) => void;

export interface IModalListDispatchContext {
  open: Open;
  close: Close;
}

export type TModalListStateContext = Array<{
  ModalComponent: ModalComponent;
  props?: ValidModalProps;
}>;

export type OpenModalListImpl = <VMC extends ModalComponentSuperSet>(
  ModalComponent: VMC,
  props?: ExposedModalProps<VMC> | null,
) => void;

export type OpenModalListWithoutModalListRef = <VMC extends ModalComponentSuperSet>(
  ModalComponent: ModalComponentHasAllRequiredProps<VMC>,
  props?: ExposedModalPropsWithoutModalRef<VMC> | null,
) => void;

export type OpenModalListWithModalRef = <VMC extends ModalComponentSuperSet>(
  ModalComponent: ModalComponentHasAllRequiredProps<VMC>,
  props?: ExposedModalProps<VMC> | null,
  options?: OpenModalOptions,
) => void;

export type CloseModal = ({ ModalComponent }: { ModalComponent: ModalComponent }) => void;

/// ////////////////////////////////////////////////////////////////////////////////////
/// for single layer modal
/// ////////////////////////////////////////////////////////////////////////////////////

export type TModalStateContext = {
  ModalComponent: ModalComponent | null;
  props: ValidModalProps;
  isModalOpen: boolean;
};

export type TModalDispatchContext = {
  open: <VMC extends ModalComponent>({
    ModalComponent,
    props,
    options,
  }: {
    ModalComponent: VMC;
    props?: ExposedModalPropsWithoutModalRef<VMC> | null;
    options?: OpenModalOptions;
  }) => void;
  close: VoidFunction;
};

export type OpenModal = <MC extends ModalComponentSuperSet, VMC extends ModalComponentHasAllRequiredProps<MC>>(
  Component: VMC,
  props: ExposedModalPropsWithoutModalRef<VMC> | null,
  options?: OpenModalOptions,
) => void;

export type UseModal = () => {
  openModal: OpenModal;
  closeModal: VoidFunction;
};

export type ModalProviderProps = PropsWithChildren;

export type ModalListProviderProps = PropsWithChildren;
