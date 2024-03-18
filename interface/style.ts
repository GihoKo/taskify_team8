export type RGB = `rgb(${number}, ${number}, ${number})`;

export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;

export type HEX = `#${string}`;

export type Color = RGB | HEX | RGBA;

export type MobileFirstResponsiveUtility<T extends NonNullable<unknown>> = T | { onPc?: T; onTablet?: T; onMobile: T };

export type DropPrimitiveTypeFromResponsiveStyleUtility<T> =
  T extends MobileFirstResponsiveUtility<infer U> ? { onPc?: U; onTablet?: U; onMobile: U } : T;

/**
 * mobile first unit utility
 */
export type ResponsiveUnitUtility = MobileFirstResponsiveUtility<string>;

/**
 * mobile first boolean utility
 */
export type ResponsiveBooleanUtility = MobileFirstResponsiveUtility<boolean>;
