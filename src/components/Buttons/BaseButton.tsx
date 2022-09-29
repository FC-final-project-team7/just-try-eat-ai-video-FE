import styled, { css, DefaultTheme } from 'styled-components';

export type BaseButtonProps = Omit<JSX.IntrinsicElements['button'], 'ref'> & {
  width: keyof DefaultTheme['buttonsSize'] | string;
  height: keyof DefaultTheme['buttonsSize'] | string;
};

const getValueIfProperty = <
  T extends object,
  K extends keyof T,
  V extends unknown | undefined
>(
  obj: T,
  keyAndDefault: K | string,
  sel: (obj: T[K] | undefined) => V
) => {
  return sel(obj[keyAndDefault as K]) ?? keyAndDefault;
};

const BaseButton = styled.button<BaseButtonProps>`
  ${({ theme, ...props }) => css`
    all: unset;

    width: ${getValueIfProperty(
      theme.buttonsSize,
      props.width,
      (obj) => obj?.w
    )};
    height: ${getValueIfProperty(
      theme.buttonsSize,
      props.height,
      (obj) => obj?.h
    )};

    font: inherit;
    text-align: center;
    cursor: pointer;
    outline: inherit;
    box-sizing: border-box;
  `}
`;

export default BaseButton;
