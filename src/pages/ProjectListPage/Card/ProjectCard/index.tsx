import * as S from './style';
import { TProjectData } from '~/types/projects';
import { useCallback, useState } from 'react';

type Props = {
  project: TProjectData;
};

function ProjectCard(props: Props) {
  const { project } = props;
  const [showHoverBlock, setShowHoverBlock] = useState(false);

  const onMouseOverHandler = useCallback(() => {
    setShowHoverBlock(true);
  }, [setShowHoverBlock]);

  const onMouseOutHandler = useCallback(() => {
    setShowHoverBlock(false);
  }, [setShowHoverBlock]);

  return (
    <S.CardBlock
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
    >
      <S.ImageBlock>
        {project.thumbnail && <img src={project.thumbnail} alt="thumbnail" />}
      </S.ImageBlock>
      <S.ProjectInfo>
        <S.ProjectTitle>{project.name}</S.ProjectTitle>
        <S.ProjectDate>{project.createdDate}</S.ProjectDate>
      </S.ProjectInfo>
      {showHoverBlock && <S.CardHoverBlock />}
    </S.CardBlock>
  );
}

export default ProjectCard;
