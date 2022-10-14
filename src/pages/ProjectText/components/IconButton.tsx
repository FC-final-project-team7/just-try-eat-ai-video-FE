import styled, { css } from 'styled-components';
import FilledButton from '~/components/Buttons/FilledButton';
import { focusThisOutline } from '~/styles/mixins';

const IconButton = styled(FilledButton).attrs(() => ({
  width: '32px',
  height: '32px',
}))`
  ${({ theme, ...props }) =>
    css`
      ${theme.flex.flexCenter};

      min-width: ${props.width};
      min-height: ${props.height};

      border-radius: 100%;

      background-color: ${theme.colors.gray200};
      color: ${theme.bg.main};

      ${focusThisOutline()};
    ` as TemplateStringsArray}
`;

export default IconButton;
