import styled from 'styled-components';

import ProjectTextarea from '../../components/Project/ProjectTextarea';
import ProjectVoiceOptions from './ProjectVoiceOptions';
import ProjectVoiceSelect from './ProjectVoiceSelect';

export const Container = styled.div``;
export const HeaderContainer = styled.div``;
export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 32px;

  width: 1200px;
  margin: 0 auto;
`;

export const TempContainer = styled.div`
  display: flex;
  justify-content: end;
  grid-gap: 16px;
`;

export const ContentsWrapper = styled.div`
  display: grid;
  grid-gap: 32px;

  grid-template-rows: 360px 256px;
  grid-template-columns: 600px 568px;

  grid-template-areas:
    'textarea voice-select'
    'voice-options voice-select';

  height: 648px;
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
