import * as S from './style';
import { TProjectData } from '~/types/projects';
import { useCallback, useState } from 'react';
import remove from '~/assets/icons/remove.svg';

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

  const onCardRemoveHandler = () => {
    console.log('삭제 모달 띄우기');
  };

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
      {showHoverBlock && (
        <>
          <S.CardHoverBlock />
          <S.CardHoverButtonBlock onClick={onCardRemoveHandler}>
            <img src={remove} alt="remove-icon" />
          </S.CardHoverButtonBlock>
        </>
      )}
    </S.CardBlock>
  );
}

export default ProjectCard;
