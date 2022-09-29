import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
    }
    html {
      background: ${theme.bg.main};
      color: ${theme.colors.gray100};
      font-family: 'Noto Sans KR', sans-serif;
    }
  `}
`;

export default GlobalStyle;
