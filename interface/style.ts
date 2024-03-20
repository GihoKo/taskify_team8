export type RGB = `rgb(${number}, ${number}, ${number})`;

export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;

export type HEX = `#${string}`;

export type Color = RGB | HEX | RGBA;

export type MobileFirstResponsiveUtility<T extends NonNullable<unknown>> = T | { onPc?: T; onTablet?: T; onMobile: T };

export type DropPrimitiveTypeFromResponsiveStyleUtility<T> =
  T extends MobileFirstResponsiveUtility<infer U> ? { onPc?: U; onTablet?: U; onMobile: U } : T;

/**
 * ### mobile first unit utility
 *
 * you can specify primitive type or object with onPc, onTablet, onMobile which is optional property
 * if you don't specify onPc, onTablet unit, then the unit specified on onMobile will be applied to all devices
 *
 * 원시 유형 또는 onPc, onTablet, onMobile이라는 선택적 속성을 가진 객체를 지정할 수 있습니다.
 * onPc, onTablet 단위를 지정하지 않으면 onMobile에 지정된 단위가 모든 장치에 적용됩니다.
 */
export type ResponsiveUnitUtility = MobileFirstResponsiveUtility<string>;

/**
 * ### mobile first boolean utility
 *
 * you can specify primitive type or object with onPc, onTablet, onMobile which is optional property
 * if you don't specify onPc, onTablet boolean, then the boolean specified on onMobile will be applied to all devices
 *
 * 원시 유형 또는 onPc, onTablet, onMobile이라는 선택적 속성을 가진 객체를 지정할 수 있습니다.
 * onPc, onTablet 불리언을 지정하지 않으면 onMobile에 지정된 불리언이 모든 장치에 적용됩니다.
 */
export type ResponsiveBooleanUtility = MobileFirstResponsiveUtility<boolean>;
