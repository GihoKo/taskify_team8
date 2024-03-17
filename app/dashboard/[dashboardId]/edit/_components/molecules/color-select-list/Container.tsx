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

// const columnGap = css<StyledContainerProps>`
/**
 * TODO: 함수화 할 수 있는 지 실험 중
 */
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
    /* column-gap: 1rem; */
    ${setColumnGap('1rem')}

    width: fit-content;
  `,
};
