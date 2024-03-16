import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import envelopeSvg from '@public/images/logos/envelope-filledGray_D9D9D9-w20-h20.svg';
import facebookSvg from '@public/images/logos/facebook-filledGray_D9D9D9-w22-h22.svg';
import instagramSvg from '@public/images/logos/instagram-filledGray_D9D9D9-w22-h22.svg';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

export default function Footer() {
  return (
    <S.Footer>
      <S.SiteInfo>©codeit - 2023</S.SiteInfo>
      <S.PrivacyPolicyAndFAQWrapper>
        <S.SiteInfo>Privacy Policy</S.SiteInfo>
        <S.SiteInfo>FAQ</S.SiteInfo>
      </S.PrivacyPolicyAndFAQWrapper>
      <S.IconWrapper>
        <Link href='/'>
          <Image src={envelopeSvg} alt='이메일 아이콘' />
        </Link>
        <Link href='/'>
          <Image src={facebookSvg} alt='페이스북 아이콘' />
        </Link>
        <Link href='/'>
          <Image src={instagramSvg} alt='인스타그램 아이콘' />
        </Link>
      </S.IconWrapper>
    </S.Footer>
  );
}

const S = {
  Footer: styled.footer`
    height: 33.6rem;
    background-color: ${({ theme }) => theme.color.black_000000};

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 12rem;

    @media ${mediaBreakpoint.tablet} {
      flex-direction: row;
      justify-content: space-between;
      padding-left: 4rem;
      padding-right: 4rem;
    }

    @media ${mediaBreakpoint.pc} {
      padding-left: 14rem;
      padding-right: 14rem;
    }
  `,

  PrivacyPolicyAndFAQWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 1.2rem;

    @media ${mediaBreakpoint.tablet} {
      gap: 3.2rem;
      margin-top: 0;
    }
  `,

  SiteInfo: styled.div`
    color: ${({ theme }) => theme.color.gray_9FA6B2};
    font-size: 1.2rem;
    font-weight: 400;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.6rem;
    }
  `,

  IconWrapper: styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 6.8rem;

    @media ${mediaBreakpoint.tablet} {
      gap: 1.4rem;
      margin-top: 0;
    }
  `,
};
