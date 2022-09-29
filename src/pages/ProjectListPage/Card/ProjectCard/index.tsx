import * as S from './style';
import { TProjectData } from '~/types/projects';

type Props = {
  project: TProjectData;
};

function ProjectCard(props: Props) {
  const { project } = props;
  return (
    <S.CardBlock>
      <S.ImageBlock>
        {project.thumbnail && <img src={project.thumbnail} alt="thumbnail" />}
      </S.ImageBlock>
      <S.ProjectInfo>
        <S.ProjectTitle>{project.name}</S.ProjectTitle>
        <S.ProjectDate>{project.createdDate}</S.ProjectDate>
      </S.ProjectInfo>
    </S.CardBlock>
  );
}

export default ProjectCard;
