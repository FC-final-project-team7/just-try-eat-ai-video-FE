import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import ProjectTextStepper from '~/pages/ProjectText/ProjectTextStepper';
import ProjectTextArea from '~/pages/ProjectText/ProjectTextArea';
import ProjectVoiceOptions from '~/pages/ProjectText/ProjectVoiceOptions';
import ProjectVoiceSelect from '~/pages/ProjectText/ProjectVoiceSelect';

const Container = styled.div``;
const HeaderContainer = styled.div``;
const ContentsContainer = styled.div``;

const ProjectTextPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = useParams();

  return (
    <Container>
      <HeaderContainer>
        <ProjectTextStepper />
      </HeaderContainer>
      <ContentsContainer>
        <ProjectTextArea />
        <ProjectVoiceOptions />
        <ProjectVoiceSelect />
      </ContentsContainer>
    </Container>
  );
};

export default ProjectTextPage;
