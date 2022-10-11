import { css } from '~/utils/styled-components-fast';

export const mixin = {
  base: css`
    border-radius: 10px;
  `,
  containerBg: css`
    ${({ theme }) => css`
      background-color: ${theme.colors.sub.blueGray};
    `}
  `,
};
