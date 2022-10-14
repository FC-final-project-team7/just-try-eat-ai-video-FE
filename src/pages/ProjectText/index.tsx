import { ChangeEvent, Suspense, useCallback, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import FilledButton from '~/components/Buttons/FilledButton';
import ProjectStepper from '~/components/Project/ProjectStepper';
import ErrorBoundary from '~/components/ErrorBoundary';
import OverlayLoader from '~/components/Popup/Loaders/OverlayLoader.tsx';
import * as S from './styles';

import { projectsApi } from '~/stores/apis/projects';
import { useUpdateProjectTextMutation } from '~/stores/apis/projectText';

import { useRtkQueryResource } from '~/hooks/useRtkQueryResource';
import { useTranslate } from './translate/hooks';

import { pagesTo } from '~/pages/pages';

import { IProject } from '~/types/project/projects';
import { IVoiceOption, IVoiceSelect } from '~/types/project/voices';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectTextPage = () => {
  const { id } = useParams();
  const resource = useRtkQueryResource<IProject>(projectsApi, 'getProject', id);

  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <Container>
            <h1>로딩중</h1>
          </Container>
        }
      >
        <S.Container>
          <S.HeaderContainer>
            <ProjectStepper />
          </S.HeaderContainer>
          <Contents resource={resource} />
        </S.Container>
      </Suspense>
    </ErrorBoundary>
  );
};

const Contents = ({ resource }: { resource: () => IProject }) => {
  const data = resource();
  const { t } = useTranslate();

  const options = useRef({ ...data });
  const onChangeText = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    options.current = {
      ...options.current,
      text: e.target.value,
    };
  }, []);

  const onChangeHandler = useCallback((v: IVoiceOption | IVoiceSelect) => {
    options.current = {
      ...options.current,
      ...v,
    };
  }, []);

  const [updateText, { isLoading: isLoadingUpdate }] =
    useUpdateProjectTextMutation();
  const onClickSaveHandler = useCallback(async () => {
    await updateText(options.current).unwrap();
  }, []);

  const navigate = useNavigate();
  const onClickNextHandler = useCallback(async () => {
    // 여기서 생성하면 서버가 힘들어.....
    await updateText(options.current).unwrap();
    navigate(pagesTo.sentence(options.current.projectId));
  }, []);

  return (
    <>
      <S.ContentsContainer>
        <S.TempContainer>
          <FilledButton
            width="small"
            height="small"
            onClick={onClickSaveHandler}
          >
            저장
          </FilledButton>
          <FilledButton
            width="small"
            height="small"
            onClick={onClickNextHandler}
          >
            다음 페이지
          </FilledButton>
        </S.TempContainer>
        <S.ContentsWrapper>
          <S.Textarea
            placeholder={t('textArea.placeholder')}
            defaultValue={data.text}
            onChange={onChangeText}
          />
          <S.VoiceOptions
            defaultVoiceOptions={data}
            onChange={onChangeHandler}
          />
          <S.VoiceSelect defaultOptions={data} onChange={onChangeHandler} />
        </S.ContentsWrapper>
      </S.ContentsContainer>
      {isLoadingUpdate && <OverlayLoader />}
    </>
  );
};

export default ProjectTextPage;
