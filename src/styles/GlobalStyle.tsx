import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
    }
    html {
      background: ${theme.bg.main};
      color: ${theme.colors.gray100};
    }
  `}
`;

export default GlobalStyle;
