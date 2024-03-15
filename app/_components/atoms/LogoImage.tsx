import styled from 'styled-components';

import LogoSvg from '@public/images/logos/logo-unfilled-w164-h189.svg?component';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

export default function LogoImage() {
  return <S.LogoImage />;
}

const S = {
  LogoImage: styled(LogoSvg)`
    width: 2.36rem;
    height: 2.71rem;

    @media ${mediaBreakpoint.tablet} {
      width: 2.88rem;
      height: 3.3rem;
    }
    @media ${mediaBreakpoint.pc} {
      width: 2.88rem;
      height: 3.3rem;
    }
  `,
};
