import styled, { css } from 'styled-components';
import { mixin } from '~/pages/ProjectText/mixin';

interface Props {
  className?: string;
}

const Container = styled.div`
  ${() => css`
    ${mixin.base};
    ${mixin.containerBg};

    display: flex;
    flex-flow: column;
  `}
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProjectVoiceSelect = (props: Props) => {
  const { className } = props;
  return <Container className={className}>ProjectVoiceSelect</Container>;
};

export default ProjectVoiceSelect;
