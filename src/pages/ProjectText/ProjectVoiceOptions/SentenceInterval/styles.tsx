import styled, { css } from 'styled-components';

import { textInputStyle } from '~/styles/mixins';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;

  min-width: 168px;
`;

export const ContainerInputNumber = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const InputNumber = styled.input.attrs(() => ({
  type: 'number',
}))`
  ${({ theme }) => css`
    ${textInputStyle({
      borderWidth: '1px',
      placeholderColor: theme.textColors.light,
    })}
    appearance: textfield;

    flex-grow: 1;
    flex-shrink: 0;

    width: 56px;
    min-width: 56px;
    height: 100%;

    background-color: ${theme.colors.gray400};
    color: ${theme.textColors.light};

    text-align: center;

    border-radius: 4px;
  `}
`;
