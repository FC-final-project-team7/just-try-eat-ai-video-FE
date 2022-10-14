import styled from 'styled-components';
import { projectPages } from '~/styles/mixins';
import FilledButton from '~/components/Buttons/FilledButton';

import { SentenceList as SentenceListBase } from '~/pages/ProjectSentence/EditSentence/itemStyles';

export const Container = styled.div`
  ${projectPages.container.base};
  ${projectPages.container.bg};

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 28px;

  width: 848px;
  height: 640px;
  padding: 32px 6px 0;
`;

export const AllApplyButton = styled(FilledButton).attrs(() => ({
  width: '200px',
  height: '40px',
}))`
  align-self: end;

  margin: 26px;
`;

export const SentenceList = styled(SentenceListBase)`
  flex-grow: 1;
`;
