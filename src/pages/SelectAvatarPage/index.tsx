import React from 'react';
import styled from 'styled-components';
import SelectedAvatarPreview from './SelectedAvatarPreview';
import SelectAvatarList from './SelectAvatarList';
import TabMenuList from './TabMenuList';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const AvatarPage = styled.div`
  display: flex;
  gap: 24px;
`;

function SelectAvatarPage() {
  return (
    <Container>
      <AvatarPage>
        <div>
          <SelectedAvatarPreview />
          <SelectAvatarList />
        </div>
        <TabMenuList />
      </AvatarPage>
    </Container>
  );
}

export default SelectAvatarPage;
