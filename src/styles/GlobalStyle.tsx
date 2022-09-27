import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
    }
    body {
      background: ${theme.bg.main};
    }
  `}
`;

export default GlobalStyle;
