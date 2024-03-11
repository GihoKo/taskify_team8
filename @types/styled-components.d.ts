import { CSSProp } from 'styled-components';

import { Palette } from '@/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Palette {}
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp;
  }
}
