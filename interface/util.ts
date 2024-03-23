import { FC } from 'react';

/**
 * use for type extending only
 */
export type Obj = Record<string, any>;
type AllValidTypes = string | number | bigint | boolean | object;
type AllInvalidTypes = void | undefined | null;

export type Serializable = string | number | bigint | boolean | object;

export type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false;

export type SetPickedPropToRequired<T extends Obj, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

/**
 * same as {}
 */
export type ValidTypes = NonNullable<unknown>;

type MinimalPropCondition<T> = T extends Obj ? T : never;

/**
 * TODO: 테스트 해봐야 함.
 */
export type CleanMatchedProps<T, K> = {
  [P in keyof T as T[P] extends K ? never : P]: T[P];
};

type TransformMatchedPropsToNonNullable<T, K> = {
  [P in keyof T]: T[P] extends K ? NonNullable<T[P]> : T[P];
};

type TransformOptionalToNonNullable<T> = TransformMatchedPropsToNonNullable<T, AllValidTypes | AllInvalidTypes>;

export type TransformOptionalToNonNullableProps<T extends Obj> = {
  children: FC<TransformOptionalToNonNullable<T>>;
  condition: MinimalPropCondition<T>;
  fallback?: React.ReactNode;
};
