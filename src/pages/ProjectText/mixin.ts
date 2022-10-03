import { css } from 'styled-components';

export const mixin = {
  base: css`
    border-radius: 10px;
  `,
  containerBg: css`
    ${({ theme }) => css`
      background-color: ${theme.colors.sub.blueGray};
    `}
  `,
  size: {
    contents: {
      size: css`
        width: 1200px;
        height: 648px;
      `,
      gap: css`
        gap: 32px;
      `,
      textarea: css`
        width: 600px;
        height: 360px;
      `,
      voiceOptions: css`
        width: 600px;
        height: 256px;
      `,
      voiceSelect: css`
        width: 568px;
        height: 648px;
      `,
    },
  },
};
