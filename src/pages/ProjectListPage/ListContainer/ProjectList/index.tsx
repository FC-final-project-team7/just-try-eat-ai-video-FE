import { useState } from 'react';
import { PROJECT_DATA } from '~/pages/ProjectListPage/data';
import ProjectCard from '../../Card/ProjectCard';
import NoticeModal from '~/components/Popup/NoticeModal';

import * as S from './style';
import plus from '~/assets/icons/plus.svg';
import ProjectSelectModal from '~/components/Popup/ProjectSelectModal';
import UploadErrorModal from '~/components/Popup/ErrorModal/UploadErrorModal';

function ProjectList() {
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const onProjectAddHandler = () => {
    setShowModal(true);
  };

  return (
    <>
      <S.ListBlock>
        <S.ListHeader>
          <S.ListTitle>내 프로젝트</S.ListTitle>
          <S.Button onClick={onProjectAddHandler}>
            <img src={plus} alt="plus-icon" />
            <S.ButtonText>새프로젝트</S.ButtonText>
          </S.Button>
        </S.ListHeader>
        <S.ListCard>
          {PROJECT_DATA?.map((project) => (
            <ProjectCard key={project.projectId} project={project} />
          ))}
        </S.ListCard>
      </S.ListBlock>
      {showModal && PROJECT_DATA.length === 5 ? (
        <NoticeModal
          setShowModal={setShowModal}
          content={
            '프로젝트는 5개까지 제작 가능해요 \n 사용하지 않는 프로젝트를 삭제해주세요'
          }
        />
      ) : (
        showModal && <ProjectSelectModal setShowModal={setShowModal} />
      )}
      {showErrorModal && (
        <UploadErrorModal
          content="음성 업로드에 실패했습니다. 다시 시도해주세요"
          setShowErrorModal={setShowErrorModal}
        />
      )}
    </>
  );
}

export default ProjectList;
