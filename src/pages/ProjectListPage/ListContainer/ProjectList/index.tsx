import React from 'react';
import { PROJECT_DATA } from '~/pages/ProjectListPage/data';
import ProjectCard from '../../Card/ProjectCard';

import * as S from './style';
import plus from '~/assets/icons/plus.svg';

function ProjectList() {
  return (
    <S.ListBlock>
      <S.ListHeader>
        <S.ListTitle>내 프로젝트</S.ListTitle>
        <S.Button>
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
  );
}

export default ProjectList;
