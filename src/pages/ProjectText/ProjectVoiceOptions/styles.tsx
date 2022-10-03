import styled, { css } from 'styled-components';
import { mixin } from '~/pages/ProjectText/styles';
import SliderBase from '~/pages/ProjectText/ProjectVoiceOptions/Slider';

export const Container = styled.div`
  ${() => css`
    ${mixin.base};
    ${mixin.containerBg};
    ${mixin.size.contents.voiceOptions};

    display: flex;
    flex-flow: column;
    gap: 32px;

    padding: 32px 56px 32px 0;
  `}
`;

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    margin: auto;
    font-size: ${theme.fontSize.medium};
    font-weight: ${theme.fontWeight.regular};
  `}
`;

export const Slider = styled(SliderBase)`
  width: 400px;
`;
