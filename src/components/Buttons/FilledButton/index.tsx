import styled, { css } from 'styled-components';
import BaseButton from '~/components/Buttons/BaseButton';

const FilledButton = styled(BaseButton)`
  ${({ theme }) => css`
    border: ${theme.colors.primary} 4px solid;
    border-radius: 4px;

    background-color: ${theme.colors.primary};
    color: ${theme.colors.textSecond};

    &:hover {
      background-color: red;
    }
    &:focus {
      background-color: black;
    }
    &:active {
      background-color: green;
    }
    &:disabled {
      background-color: blue;
    }
  `}
`;

export default FilledButton;
