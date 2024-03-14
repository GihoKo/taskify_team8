'use client';

import { PropsWithChildren } from 'react';

import Image from 'next/image';
import { css, styled } from 'styled-components';

import { Color, ResponsiveBooleanUtility, ResponsiveUnitUtility } from '@interface/style';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

type FirstLetterProfileProps = PropsWithChildren<{
  profileSize: ResponsiveUnitUtility;
  fontSize: ResponsiveUnitUtility;
  borderWidth?: ResponsiveUnitUtility;
  isOverlapping?: ResponsiveBooleanUtility;
  backgroundColor: Color;
  profileImageUrl?: string | null;
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
  backgroundColor,
  profileImageUrl,
}: FirstLetterProfileProps) => {
  return (
    <S.Box
      $isOverlapping={isOverlapping}
      $profileSize={profileSize}
      $fontSize={fontSize}
      $borderWidth={borderWidth}
      $backgroundColor={backgroundColor}
    >
      {profileImageUrl ? <S.ProfileImage alt='유저 프로필' fill src={profileImageUrl} /> : children}
    </S.Box>
  );
};

export default FirstLetterProfile;

const overlappedPosition = css<{ $isOverlapping?: ResponsiveBooleanUtility }>`
  ${({ $isOverlapping }) =>
    typeof $isOverlapping === 'boolean' &&
    $isOverlapping &&
    css`
      margin-left: -1rem; /* -1.3rem + 0.2rem + 0.1rem */

      @media ${mediaBreakpoint.tablet} {
        margin-left: -0.8rem; /* -1.9rem + 0.6rem + 0.5rem */
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
            // maybe need not to check this condition
            border-style: ${$borderWidth.onTablet && 'solid'};
          }

          @media ${mediaBreakpoint.pc} {
            // maybe need not to check this condition
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
    $backgroundColor: Color;
  }>`
    ${profileSize};

    ${overlappedPosition}

    ${fontSize}

    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    position: relative;
    overflow: hidden;

    background: ${({ $backgroundColor }) => $backgroundColor};
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

  ProfileImage: styled(Image)`
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  `,
};
