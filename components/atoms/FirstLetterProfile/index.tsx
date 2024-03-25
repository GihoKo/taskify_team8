'use client';

import { Url } from 'next/dist/shared/lib/router/router';
import Image from 'next/image';
import Link from 'next/link';
import { css, styled } from 'styled-components';

import { Color, ResponsiveBooleanUtility, ResponsiveUnitUtility } from '@interface/style';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

interface StyledFirstLEtterProfileSharedProps {
  $profileSize: ResponsiveUnitUtility;
  $fontSize: ResponsiveUnitUtility;
  $isOverlapping?: ResponsiveBooleanUtility;
  $borderWidth?: ResponsiveUnitUtility;
  $backgroundColor: Color;
  as: 'div' | 'a';
}

interface StyledFirstLetterProfileLinkProps extends StyledFirstLEtterProfileSharedProps {
  href: Url;
}

interface StyledFirstLetterProfileBoxProps extends StyledFirstLEtterProfileSharedProps {
  onClick?: VoidFunction;
}

type FirstLetterProfileProps = {
  /**
   * 프로필 크기
   */
  profileSize: ResponsiveUnitUtility;

  /**
   * 폰트 크기
   */
  fontSize: ResponsiveUnitUtility;

  /**
   * 테두리 두께
   */
  borderWidth?: ResponsiveUnitUtility;

  /**
   * 겹치는지 여부
   */
  isOverlapping?: ResponsiveBooleanUtility;

  /**
   * 배경색
   */
  backgroundColor: Color;

  /**
   * 프로필 이미지 URL
   */
  profileImageUrl?: string | null;

  /**
   * div로 렌더링할지 button으로 렌더링할지
   * @default 'div'
   */
  as?: 'div' | 'a';

  /**
   * 링크 주소
   */
  href?: Url;

  /**
   * 클릭 이벤트(as가 div일 때만 유효하다.)
   */
  onClick?: VoidFunction;

  /**
   * 자식 요소. 첫 글자를 표시함.
   */
  children?: string;
};

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
  as = 'div',
  onClick,
  href = '/mypage',
}: FirstLetterProfileProps) => {
  const firstLetter = children ? children[0] : '';

  if (!profileImageUrl && !firstLetter) {
    return null;
  }

  const firstLetterProfileSharedProps: StyledFirstLEtterProfileSharedProps = {
    as,
    $backgroundColor: backgroundColor,
    $profileSize: profileSize,
    $fontSize: fontSize,
    $borderWidth: borderWidth,
    $isOverlapping: isOverlapping,
  };

  const content = profileImageUrl ? <S.ProfileImage alt='유저 프로필' fill src={profileImageUrl} /> : firstLetter;

  switch (as) {
    case 'a':
      return (
        <S.LinkBox href={href} {...firstLetterProfileSharedProps}>
          {content}
        </S.LinkBox>
      );
    default:
      return (
        <S.Box onClick={onClick} {...firstLetterProfileSharedProps}>
          {content}
        </S.Box>
      );
  }
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

const sharedStyleforProfile = css<StyledFirstLEtterProfileSharedProps>`
  ${profileSize};

  ${overlappedPosition}

  ${fontSize}

  cursor: ${({ as }) => (as === 'a' ? 'pointer' : 'default')};
  text-decoration: none;

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
`;

const S = {
  Box: styled.div<StyledFirstLetterProfileBoxProps>`
    ${sharedStyleforProfile}
  `,

  LinkBox: styled(Link)<StyledFirstLetterProfileLinkProps>`
    ${sharedStyleforProfile}
  `,

  ProfileImage: styled(Image)`
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  `,
};
