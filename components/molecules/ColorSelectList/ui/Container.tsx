import { PropsWithChildren } from 'react';

import { css, styled } from 'styled-components';

import { ResponsiveUnitUtility } from '@interface/style';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

type StyledContainerProps = {
  $columnGap?: ResponsiveUnitUtility;
};
type ContainerProps = PropsWithChildren<StyledContainerProps>;

const Container = ({ children, $columnGap }: ContainerProps) => {
  return <S.Container $columnGap={$columnGap}>{children}</S.Container>;
};

export default Container;

const setColumnGap = (defaultColumnGap: string) => css<StyledContainerProps>`
  ${({ $columnGap }) => {
    if (!$columnGap) {
      return css`
        column-gap: ${defaultColumnGap};
      `;
    }

    if (typeof $columnGap === 'string') {
      return css`
        column-gap: ${$columnGap};
      `;
    }

    return css`
      column-gap: ${$columnGap.onMobile};

      @media ${mediaBreakpoint.tablet} {
        column-gap: ${$columnGap.onTablet};
      }

      @meida ${mediaBreakpoint.pc} {
        column-gap: ${$columnGap.onPc};
      }
    `;
  }}
`;

const S = {
  Container: styled.div<StyledContainerProps>`
    display: flex;
    ${setColumnGap('1rem')}

    width: fit-content;
  `,
};
