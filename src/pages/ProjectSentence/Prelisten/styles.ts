import styled, { css } from '~/utils/styled-components-fast';

import Slider from '~/components/Project/Slider';
import FilledButton from '~/components/Buttons/FilledButton';

import { focusThisOutline } from '~/styles/mixins';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const Seekbar = styled(Slider)`
  width: 320px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 24px;
`;

export const ControlContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const IconButton = styled(FilledButton).attrs(() => ({
  width: '40px',
  height: '40px',
}))`
  ${({ theme, ...props }) => css`
    ${theme.flex.flexCenter};

    min-width: ${props.width};
    min-height: ${props.height};

    border: ${theme.textColors.light} 1px solid;
    border-radius: 100%;

    background-color: ${theme.colors.main.purple};
    color: ${theme.textColors.light};

    ${focusThisOutline()};
  `}
`;

export const DownloadButton = styled(FilledButton).attrs(() => ({
  width: '200px',
  height: '40px',
}))`
  flex-grow: 1;
`;
