import { Suspense, useCallback, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import ErrorBoundary from '~/components/ErrorBoundary';
import FilledButton from '~/components/Buttons/FilledButton';
import * as S from './styles';

import { useRtkQueryResource } from '~/hooks/useRtkQueryResource';
import {
  projectSentenceApi,
  useCreateAudioTextMutation,
  usePatchAudioTextMutation,
} from '~/stores/apis/projectSentence';

import { IProjectSentence } from '~/types/project/sentence';

// import fakeData from './fakeData.json';
import styled from 'styled-components';

// FIXME 서버 터지겠다
// const getFakeResource = () => () => fakeData as IProjectSentence;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectSentencePage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = useParams();
  const resource = useRtkQueryResource<IProjectSentence>(
    projectSentenceApi,
    'getSentences',
    id
  );
  // const resource = getFakeResource();

  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <Container>
            <h1>생성 중....</h1>
          </Container>
        }
      >
        <S.Container>
          <S.HeaderContainer>{/*<ProjectStepper />*/}</S.HeaderContainer>
          <Contents resource={resource} />
        </S.Container>
      </Suspense>
    </ErrorBoundary>
  );
};

export default ProjectSentencePage;

const Contents = ({ resource }: { resource: () => IProjectSentence }) => {
  const data = resource();

  const [sentenceList, setSentenceList] = useState([...data.sentenceList]);
  const text = useMemo(
    // TODO 텍스트양 많아지면 최적화
    () => {
      return sentenceList.map((_) => _.sentence).join('\n');
    },
    [sentenceList]
  );

  // TODO sentenceList 업뎃되면 다시 요청해서 넣어야 됨
  const [prelisten, setPrelisten] = useState({
    url: data.audio,
    isCreating: false,
    isCreated: true,
  });

  const onClickNextHandler = useCallback(async () => {
    console.log('onClickNextHandler');
  }, []);

  const onCreatedSentenceHandler = useCallback(
    ({ idx, sentence }: { idx: number; sentence: string }) => {
      setSentenceList((p) => {
        const n = [...p];
        n[idx] = {
          ...p[idx],
          sentence,
        };
        return n;
      });
      setPrelisten((p) => {
        if (p.isCreating) return p;

        return {
          ...p,
          isCreated: false,
          isCreating: false,
        };
      });
    },
    []
  );

  const [updateProject] = usePatchAudioTextMutation();
  const [createAudioTextRequest] = useCreateAudioTextMutation();
  const onCreateTextHandler = useCallback(async () => {
    if (prelisten.isCreating) return;
    try {
      setPrelisten((p) => ({
        ...p,
        isCreated: false,
        isCreating: true,
      }));

      const res = await createAudioTextRequest({
        projectId: data.projectId,
        audioUrl: prelisten.url,
        text,
      }).unwrap();

      updateProject({ projectId: data.projectId, audio: res.audioUrl, text });

      setPrelisten(() => ({
        url: res.audioUrl,
        isCreated: true,
        isCreating: false,
      }));
    } catch (e) {
      setPrelisten((p) => ({
        ...p,
        isCreated: !!p.url,
        isCreating: false,
      }));
    }
  }, [prelisten, text]);

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
          <S.Prelisten
            src={prelisten.isCreated ? prelisten.url : ''}
            isCreating={prelisten.isCreating}
            onClickCreate={onCreateTextHandler}
          />
          <S.EditSentence
            projectId={data.projectId}
            defaultList={sentenceList}
            onCreated={onCreatedSentenceHandler}
          />
        </S.ContentsWrapper>
      </S.ContentsContainer>
    </>
  );
};
