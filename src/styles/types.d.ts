import 'styled-components';

import theme from '~/styles/theme';
type ThemeType = typeof theme;

// and extend them!
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
