import { ChangeEvent, Suspense, useCallback, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ProjectTextStepper from './ProjectTextStepper';
import FilledButton from '~/components/Buttons/FilledButton';
import * as S from './styles';

import { projectsApi } from '~/stores/apis/projects';
import {
  useNextMutation,
  useUpdateProjectTextMutation,
} from '~/stores/apis/projectText';

import { useRtkQueryResource } from '~/hooks/useRtkQueryResource';
import { useTranslate } from './translate/hooks';

import { pagesTo } from '~/pages/pages';

import { IProject } from '~/types/project/projects';
import { IVoiceOption, IVoiceSelect } from '~/types/project/voices';

const ProjectTextPage = () => {
  const { id } = useParams();
  const resource = useRtkQueryResource<IProject>(projectsApi, 'getProject', id);

  return (
    <Suspense fallback={<h1>로딩중</h1>}>
      <S.Container>
        <S.HeaderContainer>
          <ProjectTextStepper />
        </S.HeaderContainer>
        <Contents resource={resource} />
      </S.Container>
    </Suspense>
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

  const [updateText] = useUpdateProjectTextMutation();
  const onClickSaveHandler = useCallback(async () => {
    await updateText(options.current).unwrap();
  }, []);

  const navigate = useNavigate();
  const [next] = useNextMutation();
  const onClickNextHandler = useCallback(async () => {
    await next(options.current).unwrap();
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
    </>
  );
};

export default ProjectTextPage;
