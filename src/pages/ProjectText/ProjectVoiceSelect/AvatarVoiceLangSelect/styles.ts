import styled, { css } from '~/utils/styled-components-fast';

import { focusThisOutline } from '~/styles/mixins';

export const Select = styled.select`
  ${({ theme }) => css`
    appearance: none;

    width: 336px;
    height: 48px;
    padding: 0 32px;

    border: 2px solid ${theme.colors.main.purple};
    border-radius: 10px;

    background: ${theme.colors.sub.blueGray};

    font-size: ${theme.fontSize.medium};
    color: ${theme.textColors.light};

    ${focusThisOutline({ color: theme.colors.sub.purple })}
  `}
`;

export const Option = styled.option``;
