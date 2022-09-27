declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export type SvgrElement = React.ReactElement<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
}
