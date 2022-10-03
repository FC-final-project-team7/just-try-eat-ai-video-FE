import styled from 'styled-components';

import ProjectTextarea from '~/pages/ProjectText/ProjectTextarea';
import ProjectVoiceOptions from '~/pages/ProjectText/ProjectVoiceOptions';
import ProjectVoiceSelect from '~/pages/ProjectText/ProjectVoiceSelect';

export const Container = styled.div``;
export const HeaderContainer = styled.div``;
export const ContentsContainer = styled.div`
  display: grid;
  grid-gap: 32px;

  grid-template-rows: 324px 256px;
  grid-template-columns: 600px 568px;

  grid-template-areas:
    'textarea voice-select'
    'voice-options voice-select';

  width: 1200px;
  height: 648px;
  margin: 0 auto;
`;

export const Textarea = styled(ProjectTextarea)`
  grid-area: textarea;
`;

export const VoiceOptions = styled(ProjectVoiceOptions)`
  grid-area: voice-options;
`;

export const VoiceSelect = styled(ProjectVoiceSelect)`
  grid-area: voice-select;
`;
