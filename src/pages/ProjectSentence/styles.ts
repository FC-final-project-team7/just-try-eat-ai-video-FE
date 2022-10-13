import styled from '~/utils/styled-components-fast';
import ProjectTextarea from '~/components/Project/ProjectTextarea';
import PrelistenBase from '~/pages/ProjectSentence/Prelisten';

export const Container = styled.div``;
export const HeaderContainer = styled.div``;
export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

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

  grid-template-columns: min-content 1fr;
  grid-template-rows: 1fr 1fr;

  grid-template-areas:
    'textarea edit-sentence'
    'prelisten edit-sentence';

  grid-gap: 24px;
`;

export const Textarea = styled(ProjectTextarea)`
  grid-area: textarea;

  width: 328px;
  height: 480px;
`;

export const Prelisten = styled(PrelistenBase)`
  grid-area: prelisten;
`;

export const EditSentence = styled.div`
  grid-area: edit-sentence;
`;
