import React from 'react';
import styled from 'styled-components';
import ProjectList from './ListContainer/ProjectList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 180px;
  margin: 0 auto;
  gap: 80px;
`;

function ProjectListPage() {
  return (
    <Container>
      <ProjectList />
    </Container>
  );
}

export default ProjectListPage;
