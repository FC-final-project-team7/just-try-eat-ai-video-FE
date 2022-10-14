import React from 'react';
import styled from 'styled-components';
import SelectedAvatarPreview from './SelectedAvatarPreview';
import SelectAvatarList from './SelectAvatarList';
import TabMenuList from './TabMenuList';

const Container = styled.div``;

const AvatarPage = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
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
