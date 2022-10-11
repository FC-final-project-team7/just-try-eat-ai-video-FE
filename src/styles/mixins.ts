import { css } from 'styled-components';

export const fontFamily = css`
  font-family: 'Noto Sans KR', sans-serif;
`;

export const textInputStyle = (options: {
  borderWidth: string;
  placeholderColor: string;
}) => css`
  ${({ theme }) => css`
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
  `}
`;

export const focusStyle = ({
  position,
  width = '2px',
  color,
}: {
  position: 'border' | 'outline';
  width?: string;
  color?: string;
}) => css`
  ${({ theme }) => css`
    ${position}: ${width} solid
        ${color || theme.colors.main.purple};
  `}
`;

const _focus = ({
  target = '&',
  ...focusStyleOptions
}: {
  target?: string;
} & Parameters<typeof focusStyle>[0]) => css`
  ${() => css`
    ${target}:focus-visible,
    ${target}:focus {
      ${focusStyle(focusStyleOptions)};
    }
  `}
`;

type TFocusArgs = Omit<Parameters<typeof _focus>[0], 'position'>;

export const focusThisBorder = (options: TFocusArgs) =>
  _focus({ ...options, position: 'border' });

export const focusThisOutline = (options: TFocusArgs) =>
  _focus({ ...options, position: 'outline' });
