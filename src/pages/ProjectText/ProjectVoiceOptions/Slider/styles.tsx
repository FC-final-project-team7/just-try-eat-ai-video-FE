import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

// 선택자 리스트로 하면 이상하게 안됨
const listSelector = (selectors: string[], style: ReturnType<typeof css>) =>
  selectors.map(
    (selector) =>
      css`
        &${selector} {
          ${style}
        }
      `
  );

export const StyledSlider = styled.input.attrs(() => ({
  type: 'range',
}))`
  ${({ theme }) => css`
    padding: 0;
    padding-inline: 0;
    margin: 0 0 8px;
    width: 100%;
    height: 20px;
    font-size: 20px;

    background-color: transparent;

    ${listSelector(
      ['::-moz-range-thumb', '::-webkit-slider-thumb', '::-ms-thumb'],
      css`
        all: unset;

        width: 1em;
        height: 1em;
        border-radius: 0.5em;

        background-color: ${theme.colors.main.purple};
      `
    )}

    ${listSelector(
      ['::-moz-range-track', '::-webkit-slider-runnable-track', '::-ms-track'],
      css`
        all: unset;

        height: 0.2em;
        width: 100%;
        border-radius: 0.2em;

        background-color: ${theme.colors.gray400};
      `
    )}
  `}
`;

export const Datalist = styled.datalist`
  ${({ theme }) => css`
    //position: relative;
    display: flex;
    justify-content: space-between;
    height: 20px;

    font-size: ${theme.fontSize.small};

    > option {
      margin: 0;
      padding: 0;
    }
  `}
`;
