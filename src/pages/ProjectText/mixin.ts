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
};
