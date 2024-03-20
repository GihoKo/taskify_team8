import { ComponentProps, ComponentType, MutableRefObject, PropsWithChildren } from 'react';

// export type Obj = Record<string | number | symbol, any>;
// export type Obj = Record<string, any>;
export type Obj = Record<string, any>;

type Key = keyof Obj;

type ModalComponentOrObj = ModalComponent | Obj;

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

type RequiredModalProps = Required<OptionalModalProps>;
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
export type ModalComponent<CustomComponentProps = Obj> = ComponentType<
  Partial<CustomComponentProps> & RequiredModalProps
>;

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
export type ModalComponentProps<CustomComponentProps = Obj> = ComponentProps<ModalComponent<CustomComponentProps>>;

type InternalModalComponentProps<T extends ModalComponent> = ComponentProps<T> & ModalHandler;

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

export type Without<T extends ModalComponentOrObj, K extends Key> = T extends ModalComponent
  ? Omit<InternalModalComponentProps<T>, K>
  : T extends Obj
    ? Omit<T, K>
    : never;
// export type Without<T extends ModalComponentOrObj, K extends Key> = T extends ModalComponent
//   ? Omit<InternalModalComponentProps<T>, K>
//   : T extends Obj
//     ? Omit<T, K>
//     : never;
// export type Without<T extends ModalComponentOrObj, K extends Key> = T extends ModalComponent
//   ? Omit<InternalModalComponentProps<T>, K>
//   : Omit<T, K>;

// TODO: Union type would be more simple than multiple Without types
export type ModalComponentPropsWithoutModalRef<T extends ModalComponentOrObj> = Without<T, 'modalRef'>;

export type ModalComponentPropsWithoutCloseModal<T extends ModalComponentOrObj> = Without<T, 'closeModal'>;

export type ModalComponentPropsWithoutSubmitModal<T extends ModalComponentOrObj> = Without<T, 'submitModal'>;

export type ExposedModalProps<T extends ModalComponent> = ModalComponentPropsWithoutSubmitModal<
  ModalComponentPropsWithoutCloseModal<T>
> &
  ModalHandler;

export type ExposedModalPropsWithoutModalRef<T extends ModalComponent> = ModalComponentPropsWithoutModalRef<
  ExposedModalProps<T>
> &
  Omit<ModalHandler, 'modalRef'>;

// type Check1 = ExposedModalProps<ModalComponentHasAllRequiredProps<ModalComponent>>;
// type Check2 = ExposedModalPropsWithoutModalRef<ModalComponentHasAllRequiredProps<ModalComponent>>;

// type CheckType = ValidModalProps;
// const a: CheckType = {
//   // normal behavior
//   // it recommends default props as expected
// }
// type CheckType2 = Omit<ValidModalProps, 'closeModal'>;
// const a: CheckType2 = {
//   // abnormal behavior
//   // it doesn't recommend default props
// }

// export type ExposedModalProps<T extends ModalComponent> = ModalComponentPropsWithoutSubmitModal<
//   ModalComponentPropsWithoutCloseModal<T>
// > &
//   SetPickedPropToRequired<ModalHandler, 'modalRef'>;

// export type ExposedModalPropsWithoutModalRef<T extends ModalComponent> = ModalComponentPropsWithoutModalRef<
//   ExposedModalProps<T>
// > &
//   Omit<ModalHandler, 'modalRef'>;

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

export type OpenModalImpl = <VMC extends ModalComponent>(
  ModalComponent: VMC,
  props?: ExposedModalProps<VMC> | null,
) => void;

export type OpenModalWithoutModalRef = <VMC extends ModalComponent>(
  ModalComponent: ModalComponentHasAllRequiredProps<VMC>,
  props?: ExposedModalPropsWithoutModalRef<VMC> | null,
) => void;

export type OpenModalWithModalRef = <VMC extends ModalComponent>(
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
  close: () => void;
};

export type ModalProviderProps = PropsWithChildren;

export type ModalListProviderProps = PropsWithChildren;
