import Image from 'next/image';
import styled from 'styled-components';

import searchIcon from '@public/images/icons/icon-search.svg';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

export default function SearchIcon() {
  return (
    <S.Wrapper>
      <Image src={searchIcon} alt='돋보기 아이콘 이미지' fill />
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    width: 2.2rem;
    height: 2.2rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1.2rem;

    @media ${mediaBreakpoint.tablet} {
      width: 2.4rem;
      height: 2.4rem;
    }
    @media ${mediaBreakpoint.pc} {
      width: 2.4rem;
      height: 2.4rem;
    }
  `,
};
