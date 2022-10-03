import { useParams } from 'react-router-dom';

import ProjectTextStepper from '~/pages/ProjectText/ProjectTextStepper';
import ProjectTextarea from '~/pages/ProjectText/ProjectTextarea';
import ProjectVoiceOptions from '~/pages/ProjectText/ProjectVoiceOptions';
import ProjectVoiceSelect from '~/pages/ProjectText/ProjectVoiceSelect';
import * as S from '~/pages/ProjectText/styles';

const ProjectTextPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = useParams();

  return (
    <S.Container>
      <S.HeaderContainer>
        <ProjectTextStepper />
      </S.HeaderContainer>
      <S.ContentsContainer>
        <ProjectTextarea />
        <ProjectVoiceOptions />
        <ProjectVoiceSelect />
      </S.ContentsContainer>
    </S.Container>
  );
};

export default ProjectTextPage;
