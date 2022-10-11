import styled, { css } from '~/utils/styled-components-fast';
import BaseButton from '../BaseButton';

const FilledButton = styled(BaseButton)`
  ${({ theme }) => css`
    border-radius: 5px;

    background-color: ${theme.colors.main.purple};
    color: ${theme.colors.gray100};

    &:hover {
    }
    &:focus {
    }
    &:active {
    }
    &:disabled {
      background-color: ${theme.colors.gray400};
    }
  `}
`;

export default FilledButton;
