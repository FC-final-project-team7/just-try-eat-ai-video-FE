import styled, { css } from 'styled-components';
import BaseButton from '~/components/Buttons/BaseButton';

const FilledButton = styled(BaseButton)`
  ${({ theme }) => css`
    border: ${theme.colors.main.purple} 4px solid;
    border-radius: 4px;

    background-color: ${theme.colors.main.purple};
    color: ${theme.colors.gray100};

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
