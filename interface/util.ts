export type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false;

/**
 * use for type extending only
 */
export type Obj = Record<string, unknown>;

export type SetPickedPropToRequired<T extends Obj, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

/**
 * same as {}
 */
export type ValidTypes = NonNullable<unknown>;
