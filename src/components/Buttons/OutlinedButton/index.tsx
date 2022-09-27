import styled, { css } from 'styled-components';
import BaseButton from '~/components/Buttons/BaseButton';

const OutlinedButton = styled(BaseButton)`
  ${({ theme }) => css`
    border: ${theme.colors.primary} 4px solid;
    border-radius: 4px;

    color: ${theme.colors.primary};

    &:hover {
      border-color: red;
    }
    &:focus {
      border-color: black;
    }
    &:active {
      border-color: green;
    }
    &:disabled {
      border-color: blue;
    }
  `}
`;

export default OutlinedButton;