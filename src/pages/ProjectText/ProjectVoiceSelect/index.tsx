import styled, { css } from 'styled-components';
import { mixin } from '~/pages/ProjectText/mixin';

interface Props {}

const Container = styled.div`
  ${() => css`
    ${mixin.base};
    ${mixin.containerBg};
    ${mixin.size.contents.voiceSelect};

    display: flex;
    flex-flow: column;
  `}
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProjectVoiceSelect = (props: Props) => {
  return <Container>ProjectVoiceSelect</Container>;
};

export default ProjectVoiceSelect;
