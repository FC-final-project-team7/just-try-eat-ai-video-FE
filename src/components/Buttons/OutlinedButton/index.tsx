import styled, { css } from 'styled-components';

import BaseButton from '../BaseButton';

const OutlinedButton = styled(BaseButton)`
  ${({ theme }) => css`
    border: ${theme.colors.main.purple} 1px solid;

    background-color: ${theme.colors.gray100};
    color: ${theme.colors.main.purple};

    &:hover {
    }
    &:focus {
    }
    &:active {
    }
    &:disabled {
      border-color: ${theme.colors.gray400};
      color: ${theme.colors.gray400};
    }
  `}
`;

export default OutlinedButton;
