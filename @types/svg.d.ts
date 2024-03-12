declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.svg?component' {
  import * as React from 'react';

  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  export default ReactComponent;
}
