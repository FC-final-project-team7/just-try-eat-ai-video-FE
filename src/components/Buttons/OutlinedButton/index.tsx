import styled, { css } from 'styled-components';
import BaseButton from '~/components/Buttons/BaseButton';

const OutlinedButton = styled(BaseButton)`
  ${({ theme }) => css`
    border: ${theme.colors.main.purple} 4px solid;
    border-radius: 4px;

    color: ${theme.colors.main.purple};

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
