import styled, { css } from 'styled-components';

import LabelBase from '../../components/Label';

import { focusStyle } from '~/styles/mixins';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const Label = styled(LabelBase).attrs(() => ({}))`
  ${({ theme }) =>
    css`
      position: relative;

      width: 80px;
      height: ${theme.buttonsSize.big.h};

      cursor: pointer;
    ` as TemplateStringsArray}
`;

export const RadioButton = styled.input.attrs(() => ({
  type: 'radio',
}))`
  ${() =>
    css`
      all: unset;
    ` as TemplateStringsArray}
`;

export const Contents = styled.div`
  ${({ theme }) =>
    css`
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 5px;

      ${RadioButton}:not(:checked) + & {
        background-color: ${theme.colors.gray400};
      }

      ${RadioButton}:checked + & {
        background-color: ${theme.colors.main.purple};
      }

      ${RadioButton}:focus + &, &:focus-visible + & {
        ${focusStyle({ position: 'outline', color: theme.colors.sub.purple })}
      }
    ` as TemplateStringsArray}
`;
