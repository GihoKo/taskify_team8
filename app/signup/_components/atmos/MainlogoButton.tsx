import Image from 'next/image';
import styled from 'styled-components';

import LogoImage from '@public/images/icons/logo-image.svg';
import LogoText from '@public/images/icons/logo-text.svg';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

export default function MainlogoButton() {
  return (
    <S.MainlogoIcon>
      <S.LinkToMainpage>
        <Image src={LogoImage} alt={'로고 이미지'} fill />
        <Image src={LogoText} alt={'로고 텍스트'} fill />
      </S.LinkToMainpage>
      <S.WelcomeTextarea>첫 방문을 환영합니다!</S.WelcomeTextarea>
    </S.MainlogoIcon>
  );
}

const S = {
  LinkToMainpage: styled.link`
    display: flex;
    width: 140px;
    height: 195.3px;
    padding: 0px 0px 2.763px 0.798px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 21.05px;
    flex-shrink: 0;

    @media ${mediaBreakpoint.tablet} {
      width: 1.6rem;
      height: 1.6rem;
    }

    @media ${mediaBreakpoint.pc} {
      width: 1.6rem;
      height: 1.6rem;
    }
  `,
  MainlogoIcon: styled.div``,
  WelcomeTextarea: styled.div`
    color: ${({ theme }) => theme.color.black_333236};
    text-align: center;
    font-family: Pretendard;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `,
};
