import * as S from './style';
import { TProjectData } from '~/types/project/projects';
import { useCallback, useState } from 'react';
import { pagesTo } from '~/pages/pages';

import remove from '~/assets/icons/remove.svg';
import ConfirmModal from '~/components/Popup/ConfirmModal';

type Props = {
  project: TProjectData;
};

function ProjectCard(props: Props) {
  const { project } = props;
  const [showHoverBlock, setShowHoverBlock] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const modifiedDate = project.modifiedDate.toString().substring(0, 10);

  const onMouseOverHandler = useCallback(() => {
    setShowHoverBlock(true);
  }, [setShowHoverBlock]);

  const onMouseOutHandler = useCallback(() => {
    setShowHoverBlock(false);
  }, [setShowHoverBlock]);

  const onCardRemoveHandler = () => {
    setShowConfirmModal(true);
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
        <S.ProjectTitle>{project.projectName}</S.ProjectTitle>
        <S.ProjectDate>{modifiedDate}</S.ProjectDate>
      </S.ProjectInfo>
      {showHoverBlock && (
        <>
          <S.CardHoverBlock to={pagesTo.text(project.projectId)} />
          <S.CardHoverButtonBlock onClick={onCardRemoveHandler}>
            <img src={remove} alt="remove-icon" />
          </S.CardHoverButtonBlock>
        </>
      )}
      {showConfirmModal && (
        <ConfirmModal
          content="해당 프로젝트를 삭제할까요?"
          setShowConfirmModal={setShowConfirmModal}
          projectId={project.projectId}
        />
      )}
    </S.CardBlock>
  );
}

export default ProjectCard;
