import { createGlobalStyle, css } from '~/utils/styled-components-fast';
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

    // 표준 스크롤바?
    scrollbar-color: ${theme.colors.main.purple};
    scrollbar-width: thin;

    // 크롬 스크롤바
    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-track {
      //background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.main.purple};
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.sub.purple};
    }
  `}
`;

export default GlobalStyle;
