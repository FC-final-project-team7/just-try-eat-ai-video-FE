import { css } from 'styled-components';

export const mixin = {
  base: css`
    border-radius: 10px;
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
        h: 256px;
      `,
      voiceSelect: css`
        width: 568px;
        height: 100%;
      `,
    },
  },
};
