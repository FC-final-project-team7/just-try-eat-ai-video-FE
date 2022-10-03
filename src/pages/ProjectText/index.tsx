import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import ProjectTextStepper from '~/pages/ProjectText/ProjectTextStepper';
import ProjectTextarea from '~/pages/ProjectText/ProjectTextarea';
import ProjectVoiceOptions from '~/pages/ProjectText/ProjectVoiceOptions';
import ProjectVoiceSelect from '~/pages/ProjectText/ProjectVoiceSelect';

const Container = styled.div``;
const HeaderContainer = styled.div``;
const ContentsContainer = styled.div`
  display: grid;
  gap: 32px;
`;

const ProjectTextPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = useParams();

  return (
    <Container>
      <HeaderContainer>
        <ProjectTextStepper />
      </HeaderContainer>
      <ContentsContainer>
        <ProjectTextarea />
        <ProjectVoiceOptions />
        <ProjectVoiceSelect />
      </ContentsContainer>
    </Container>
  );
};

export default ProjectTextPage;
