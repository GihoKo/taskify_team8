'use client';

import { PropsWithChildren } from 'react';

import { css, styled } from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

/**
 * mobile first unit utility
 */
type ResponsiveUnitUtility =
  | {
      onPc?: string;
      onTablet?: string;
      onMobile: string;
    }
  | string;

/**
 * mobile first boolean utility
 */
type ResponsiveBooleanUtility =
  | {
      onPc?: boolean;
      onTablet?: boolean;
      onMobile: boolean;
    }
  | boolean;

type FirstLetterProfileProps = PropsWithChildren<{
  profileSize: ResponsiveUnitUtility;
  fontSize: ResponsiveUnitUtility;
  borderWidth?: ResponsiveUnitUtility;
  isOverlapping?: ResponsiveBooleanUtility;
}>;

/**
 * TODO: random color 받도록 해야 함.
 */
const FirstLetterProfile = ({
  children,
  profileSize,
  fontSize,
  borderWidth,
  isOverlapping,
}: FirstLetterProfileProps) => {
  return (
    <S.Box $isOverlapping={isOverlapping} $profileSize={profileSize} $fontSize={fontSize} $borderWidth={borderWidth}>
      {children}
    </S.Box>
  );
};

export default FirstLetterProfile;

const overlappedPosition = css<{ $isOverlapping?: ResponsiveBooleanUtility }>`
  ${({ $isOverlapping }) =>
    typeof $isOverlapping === 'boolean' &&
    $isOverlapping &&
    css`
      margin-left: -1rem; /* 1.2rem - 0.2rem */

      @media ${mediaBreakpoint.tablet} {
        margin-left: -0.8rem; /* 1.4rem - 0.6rem */
      }
    `}
`;

const profileSize = css<{ $profileSize: ResponsiveUnitUtility }>`
  ${({ $profileSize }) =>
    typeof $profileSize === 'string'
      ? css`
          width: ${$profileSize};
          height: ${$profileSize};
        `
      : css`
          width: ${$profileSize.onMobile};
          height: ${$profileSize.onMobile};

          @media ${mediaBreakpoint.tablet} {
            width: ${$profileSize.onTablet};
            height: ${$profileSize.onTablet};
          }

          @media ${mediaBreakpoint.pc} {
            width: ${$profileSize.onPc};
            height: ${$profileSize.onPc};
          }
        `}
`;

const borderWidth = css<{ $borderWidth?: ResponsiveUnitUtility }>`
  ${({ $borderWidth }) =>
    typeof $borderWidth === 'string'
      ? css`
          border-width: ${$borderWidth};
        `
      : $borderWidth &&
        css`
          border-width: ${$borderWidth.onMobile};

          @media ${mediaBreakpoint.tablet} {
            border-width: ${$borderWidth.onTablet};
          }

          @media ${mediaBreakpoint.pc} {
            border-width: ${$borderWidth.onPc};
          }
        `}
`;

const borderStyle = css<{ $borderWidth?: ResponsiveUnitUtility }>`
  ${({ $borderWidth }) =>
    typeof $borderWidth === 'string'
      ? css`
          border-style: solid;
        `
      : $borderWidth &&
        css`
          border-style: solid;

          @media ${mediaBreakpoint.tablet} {
            border-style: ${$borderWidth.onTablet && 'solid'};
          }

          @media ${mediaBreakpoint.pc} {
            border-style: ${$borderWidth.onPc && 'solid'};
          }
        `}
`;

const fontSize = css<{ $fontSize: ResponsiveUnitUtility }>`
  ${({ $fontSize }) =>
    typeof $fontSize === 'string'
      ? css`
          font-size: ${$fontSize};
        `
      : css`
          font-size: ${$fontSize.onMobile};

          @media ${mediaBreakpoint.tablet} {
            font-size: ${$fontSize.onTablet};
          }

          @media ${mediaBreakpoint.pc} {
            font-size: ${$fontSize.onPc};
          }
        `}
`;

const S = {
  Box: styled.div<{
    $profileSize: ResponsiveUnitUtility;
    $fontSize: ResponsiveUnitUtility;
    $isOverlapping?: ResponsiveBooleanUtility;
    $borderWidth?: ResponsiveUnitUtility;
  }>`
    ${profileSize};

    ${overlappedPosition}

    ${fontSize}

    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    background: #a3c4a2;
    ${borderStyle}
    border-color: ${({ theme }) => theme.color.white_FFFFFF};
    border-radius: 50%;
    ${borderWidth};

    color: ${({ theme }) => theme.color.white_FFFFFF};
    text-align: center;
    font-family: Montserrat;
    font-weight: 600;
    line-height: normal;
  `,
};
