import styled, { css } from 'styled-components';

import { focusThisOutline } from '~/styles/mixins';

export const Container = styled.div`
  position: relative;
`;

const listSelector = (
  selectors: string[],
  style: TemplateStringsArray
): TemplateStringsArray[] =>
  selectors.map(
    (selector) =>
      css`
        &${selector} {
          ${style}
        }
      ` as TemplateStringsArray
  );

export const Slider = styled.input.attrs(() => ({
  type: 'range',
}))`
  ${({ theme }) =>
    css`
      ${focusThisOutline()};

      appearance: none;

      width: 100%;
      height: 20px;
      font-size: 20px;

      margin: 0 0 8px;
      padding: 0;
      padding-inline: 0;

      background-color: transparent;

      ${listSelector(
        ['::-moz-range-thumb', '::-ms-thumb'],
        css`
          all: unset;
        ` as TemplateStringsArray
      )}

      ${listSelector(
        ['::-moz-range-thumb', '::-webkit-slider-thumb', '::-ms-thumb'],
        css`
          appearance: unset;

          width: 1em;
          height: 1em;
          font-size: 1em;

          border-radius: 0.5em;

          background-color: ${theme.colors.main.purple};
        ` as TemplateStringsArray
      )}

    ${listSelector(
        [
          '::-moz-range-track',
          '::-webkit-slider-runnable-track',
          '::-ms-track',
        ],
        css`
          height: 1em;
          width: 100%;

          background: linear-gradient(${theme.colors.gray400} 0 0) scroll
            no-repeat center / 100% 0.2em;
        ` as TemplateStringsArray
      )}
    ` as TemplateStringsArray}
`;

export const Datalist = styled.datalist`
  ${({ theme }) =>
    css`
      display: flex;
      justify-content: space-between;
      height: 20px;

      font-size: ${theme.fontSize.small};

      > option {
        margin: 0;
        padding: 0;
      }
    ` as TemplateStringsArray}
`;
