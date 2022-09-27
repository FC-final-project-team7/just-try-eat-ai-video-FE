import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
    }
    html {
      background: ${theme.bg.main};
    }
  `}
`;

export default GlobalStyle;
