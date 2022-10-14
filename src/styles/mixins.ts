import { css } from 'styled-components';

export const fontFamily = css`
  font-family: 'Noto Sans KR', sans-serif;
` as TemplateStringsArray;

export const textInputStyle = (options: {
  borderWidth: string;
  placeholderColor: string;
}) =>
  css`
    ${({ theme }) =>
      css`
        ${focusThisBorder({
          width: options.borderWidth,
          color: theme.colors.main.purple,
        })}

        outline: none;
        border: transparent ${options.borderWidth} solid;

        &::placeholder {
          ${fontFamily};
          color: ${options.placeholderColor};
        }
      ` as TemplateStringsArray}
  ` as TemplateStringsArray;

export const focusStyle = ({
  position,
  width,
  color,
}: {
  position: 'border' | 'outline';
  width?: string;
  color?: string;
}) =>
  css`
    ${({ theme }) =>
      css`
        ${position}: ${width || '2px'} solid ${color ||
        theme.colors.main.purple};
      ` as TemplateStringsArray}
  ` as TemplateStringsArray;

const _focus = ({
  target = '&',
  ...focusStyleOptions
}: {
  target?: string;
} & Parameters<typeof focusStyle>[0]) =>
  css`
    ${() =>
      css`
        ${target}:focus-visible,
        ${target}:focus {
          ${focusStyle(focusStyleOptions)};
        }
      ` as TemplateStringsArray}
  ` as TemplateStringsArray;

type TFocusArgs = Omit<Parameters<typeof _focus>[0], 'target' | 'position'>;

export const focusThisBorder = (options?: TFocusArgs) =>
  _focus({ ...options, position: 'border' });

export const focusThisOutline = (options?: TFocusArgs) =>
  _focus({ ...options, position: 'outline' });

export const projectPages = {
  container: {
    base: css`
      border-radius: 10px;
    ` as TemplateStringsArray,
    bg: css`
      ${({ theme }) =>
        css`
          background-color: ${theme.colors.sub.blueGray};
        ` as TemplateStringsArray}
    ` as TemplateStringsArray,
  },
};
