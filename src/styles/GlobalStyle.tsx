import { createGlobalStyle, css } from 'styled-components';
import { reset } from '~/styles/reset';
import { fontFamily } from '~/styles/mixins';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
    }
    html {
      background: ${theme.bg.main};
      color: ${theme.colors.gray100};
      ${fontFamily}
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  `}
`;

export default GlobalStyle;
