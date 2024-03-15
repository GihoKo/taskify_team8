import Link from 'next/link';
import styled from 'styled-components';

import LogoImage from '../atoms/LogoImage';
import LogoText from '../atoms/LogoText';

export default function Logo() {
  return (
    <Link href='/'>
      <S.Wrapper>
        <LogoImage />
        <LogoText />
      </S.Wrapper>
    </Link>
  );
}

const S = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
  `,
};
