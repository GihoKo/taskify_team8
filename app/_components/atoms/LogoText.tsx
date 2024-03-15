import styled from 'styled-components';

import LogoTextSvg from '@public/images/logos/taskify-text-unfilled-w198-h55.svg?component';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

export default function LogoText() {
  return <S.LogoText />;
}

const S = {
  LogoText: styled(LogoTextSvg)`
    color: white;
    display: none;

    @media ${mediaBreakpoint.tablet} {
      display: block;
      width: 8rem;
      height: 2.2rem;
    }
    @media ${mediaBreakpoint.pc} {
      display: block;
      width: 8rem;
      height: 2.2rem;
    }
  `,
};
