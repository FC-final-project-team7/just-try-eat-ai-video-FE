import { createGlobalStyle, css } from 'styled-components';
import { reset } from '~/styles/reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  // TODO 폰트 크기 최적화
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
    a {
      text-decoration: none;
      color: inherit;
    }
  `}
`;

export default GlobalStyle;
