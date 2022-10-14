import { createGlobalStyle, css } from 'styled-components';
import { reset } from '~/styles/reset';
import { fontFamily } from '~/styles/mixins';

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  ${({ theme }) =>
    css`
      * {
        box-sizing: border-box;
      }
      html {
        background: ${theme.bg.main};
        color: ${theme.colors.gray100};
        ${fontFamily};

        // 스크롤바에 width 주니깐 자동으로 스크롤바가 생겨서 약간 편법 씀
        width: calc(100vw - 6px);
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
        height: 4px;

        box-shadow: none;
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
    ` as TemplateStringsArray}
`;

export default GlobalStyle;
