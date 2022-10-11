import React from 'react';
import styled from '~/utils/styled-components-fast';
import ProjectList from './ListContainer/ProjectList';
import VideoList from './ListContainer/VideoList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  margin: 0 auto;
  gap: 80px;
`;

function ProjectListPage() {
  return (
    <Container>
      <ProjectList />
      <VideoList />
    </Container>
  );
}

export default ProjectListPage;
