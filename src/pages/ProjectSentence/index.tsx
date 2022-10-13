import { Suspense, useCallback, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProjectStepper from './ProjectStepper';
import FilledButton from '~/components/Buttons/FilledButton';
import * as S from './styles';

import { useRtkQueryResource } from '~/hooks/useRtkQueryResource';
import { projectSentenceApi } from '~/stores/apis/projectSentence';

import { IProjectSentence } from '~/types/project/sentence';

const ProjectSentencePage = () => {
  const { id } = useParams();
  const resource = useRtkQueryResource<IProjectSentence>(
    projectSentenceApi,
    'getSentences',
    id
  );

  return (
    <Suspense fallback={<h1>생성 중....</h1>}>
      <S.Container>
        <S.HeaderContainer>
          <ProjectStepper />
        </S.HeaderContainer>
        <Contents resource={resource} />
      </S.Container>
    </Suspense>
  );
};

export default ProjectSentencePage;

const Contents = ({ resource }: { resource: () => IProjectSentence }) => {
  const data = resource();
  console.log(data);

  const [sentenceList] = useState([...data.sentenceList]);
  const text = useMemo(
    // TODO 텍스트양 많아지면 최적화
    () => data.sentenceList.map((_) => _.sentence).join('\n'),
    [sentenceList]
  );

  const onClickNextHandler = useCallback(async () => {
    console.log('onClickNextHandler');
  }, []);

  return (
    <>
      <S.ContentsContainer>
        <S.TempContainer>
          <FilledButton
            width="small"
            height="small"
            onClick={onClickNextHandler}
          >
            다음 페이지
          </FilledButton>
        </S.TempContainer>
        <S.ContentsWrapper>
          <S.Textarea value={text} readOnly />
          <S.PrelistenControl />
          <S.EditSentence />
        </S.ContentsWrapper>
      </S.ContentsContainer>
    </>
  );
};
