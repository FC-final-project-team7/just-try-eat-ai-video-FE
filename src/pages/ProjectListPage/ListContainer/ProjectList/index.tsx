import { useState } from 'react';
import ProjectCard from '../../Card/ProjectCard';
import NoticeModal from '~/components/Popup/NoticeModal';
import { useGetProjectsQuery } from '~/stores/apis/projectList';

import * as S from './style';
import plus from '~/assets/icons/plus.svg';
import ProjectCreateModal from '~/components/Popup/ProjectCreateModal';
import Loader from '~/components/Popup/Loaders/Loader';

function ProjectList() {
  const { data, isLoading } = useGetProjectsQuery();
  const [showModal, setShowModal] = useState(false);

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

        {isLoading ? (
          <S.LoaderBlock>
            <Loader />
          </S.LoaderBlock>
        ) : data?.length === 0 ? (
          <S.EmptyBlock>
            <S.EmptyBlockTitle>
              새프로젝트 버튼을 눌러 프로젝트를 시작해보세요
            </S.EmptyBlockTitle>
          </S.EmptyBlock>
        ) : (
          <S.ListCard>
            {data?.map((project) => (
              <ProjectCard key={project.projectId} project={project} />
            ))}
          </S.ListCard>
        )}
      </S.ListBlock>
      {showModal && data?.length === 5 ? (
        <NoticeModal
          setShowModal={setShowModal}
          content={
            '프로젝트는 5개까지 제작 가능해요 \n 사용하지 않는 프로젝트를 삭제해주세요'
          }
        />
      ) : (
        showModal && <ProjectCreateModal setShowModal={setShowModal} />
      )}
    </>
  );
}

export default ProjectList;
