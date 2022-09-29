import React from 'react';
import { PROJECT_DATA } from '~/pages/ProjectListPage/data';
import ProjectCard from '../../Card/ProjectCard';

import * as S from './style';

function ProjectList() {
  return (
    <S.ListBlock>
      <S.ListHeader>
        <S.ListTitle>내 프로젝트</S.ListTitle>
        <S.button>+ 새 프로젝트</S.button>
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
