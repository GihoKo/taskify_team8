import { css } from 'styled-components';

import { BaseButtonStyledComponentProps } from '@/app/dashboard/[dashboardId]/edit/_components/BaseButton';
import { ResponsiveUnitUtility } from '@interface/style';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

/**
 *
 *
 * @see{@link BaseButtonStyledComponentProps}와 함께 사용할 것
 *
 * @example
 * ```ts
 * Button: styled.button<BaseButtonStyledComponentProps>`
 *   display: flex;
 *   justify-content: center;
 *   align-items: center;
 *   flex-shrink: 0;
 *
 *   ${setBaseButtonResponsiveWidth('8.4rem')}
 *   ${setBaseButtonResponsiveHeight({ onMobile: '2.8rem', onTablet: '3.2rem' })}
 * `
 * ```
 */
export const setBaseButtonResponsiveWidth = (
  defaultWidth?: ResponsiveUnitUtility,
) => css<BaseButtonStyledComponentProps>`
  ${({ $size, $hasFullWidth }) => {
    if ($hasFullWidth) {
      return css`
        width: 100%;
      `;
    }

    if ($size === undefined || $size.width === undefined) {
      if (typeof defaultWidth === 'string') {
        return css`
          width: ${defaultWidth};
        `;
      }

      if (typeof defaultWidth === 'undefined') {
        console.warn('The $size, $size.width, $hasFullWidth, and defaultWidth properties are all undefined.');

        return;
      }

      return css`
        width: ${defaultWidth.onMobile};

        @media ${mediaBreakpoint.tablet} {
          width: ${defaultWidth.onTablet};
        }

        @media ${mediaBreakpoint.pc} {
          width: ${defaultWidth.onPc};
        }
      `;
    }

    if ($size) {
      if (typeof $size.width === 'string') {
        return css`
          width: ${$size.width};
        `;
      }

      return css`
        width: ${$size.width.onMobile};

        @media ${mediaBreakpoint.tablet} {
          width: ${$size.width.onTablet};
        }

        @media ${mediaBreakpoint.pc} {
          width: ${$size.width.onPc};
        }
      `;
    }
  }}
`;

/**
 *
 *
 * @see{@link BaseButtonStyledComponentProps}와 함께 사용할 것
 *
 * @example
 * ```ts
 * Button: styled.button<BaseButtonStyledComponentProps>`
 *   display: flex;
 *   justify-content: center;
 *   align-items: center;
 *   flex-shrink: 0;
 *
 *   ${setBaseButtonResponsiveWidth('8.4rem')}
 *   ${setBaseButtonResponsiveHeight({ onMobile: '2.8rem', onTablet: '3.2rem' })}
 * `
 * ```
 */
export const setBaseButtonResponsiveHeight = (
  defaultHeight?: ResponsiveUnitUtility,
) => css<BaseButtonStyledComponentProps>`
  ${({ $size }) => {
    if ($size === undefined || $size.height === undefined) {
      if (typeof defaultHeight === 'string') {
        return css`
          height: ${defaultHeight};
        `;
      }

      if (typeof defaultHeight === 'undefined') {
        console.warn('size, size.height and defaultHeight properties are all undefined.');

        return;
      }

      return css`
        height: ${defaultHeight.onMobile};

        @media ${mediaBreakpoint.tablet} {
          height: ${defaultHeight.onTablet};
        }

        @media ${mediaBreakpoint.pc} {
          height: ${defaultHeight.onPc};
        }
      `;
    }

    if ($size) {
      if (typeof $size.height === 'string') {
        return css`
          height: ${$size.height};
        `;
      }

      return css`
        height: ${$size.height.onMobile};

        @media ${mediaBreakpoint.tablet} {
          height: ${$size.height.onTablet};
        }

        @media ${mediaBreakpoint.pc} {
          height: ${$size.height.onPc};
        }
      `;
    }
  }}
`;
