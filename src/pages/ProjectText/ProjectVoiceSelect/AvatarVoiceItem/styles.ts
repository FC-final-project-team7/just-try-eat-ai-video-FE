import styled, { css } from 'styled-components';

import LabelBase from '../../components/Label';

import { focusStyle } from '~/styles/mixins';

export const Label = styled(LabelBase).attrs(() => ({}))`
  ${() =>
    css`
      position: relative;

      width: 412px;
      height: 60px;

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
      justify-content: space-between;
      align-items: center;

      padding: 0 32px;

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

export const ControlContainer = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;
