export type Hex = `#${string}`;

export type Rgb = `rgb(${string}, ${string}, ${string})`;

export type Rgba = `rgba(${string}, ${string}, ${string}, ${string})`;

export type Color = Hex | Rgb | Rgba;

export type MobileFirstResponsiveUtility<T extends NonNullable<unknown>> = T | { onPc?: T; onTablet?: T; onMobile: T };

/**
 * mobile first unit utility
 */
export type ResponsiveUnitUtility = MobileFirstResponsiveUtility<string>;

/**
 * mobile first boolean utility
 */
export type ResponsiveBooleanUtility = MobileFirstResponsiveUtility<boolean>;
