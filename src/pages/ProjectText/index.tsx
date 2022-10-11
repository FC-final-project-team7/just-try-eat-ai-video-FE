import { ChangeEvent, Suspense, useCallback, useRef } from 'react';
import { useParams } from 'react-router-dom';

import ProjectTextStepper from './ProjectTextStepper';
import * as S from './styles';

import { projectsApi } from '~/stores/apis/projects';
import { useRtkQueryResource } from '~/hooks/useRtkQueryResource';
import { useTranslate } from './translate/hooks';

import { TProject } from '~/types/project/projects';
import { TVoiceOption } from '~/types/project/voices';

const ProjectTextPage = () => {
  const { id } = useParams();
  const resource = useRtkQueryResource<TProject>(projectsApi, 'getProject', id);

  return (
    <Suspense fallback={<h1>로딩중</h1>}>
      <S.Container>
        <S.HeaderContainer>
          <ProjectTextStepper />
        </S.HeaderContainer>
        <S.ContentsContainer>
          <Contents resource={resource} />
        </S.ContentsContainer>
      </S.Container>
    </Suspense>
  );
};

const Contents = ({ resource }: { resource: () => TProject }) => {
  const data = resource();
  const { t } = useTranslate();

  const options = useRef({ ...data });
  const onChangeText = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    options.current = {
      ...options.current,
      text: e.target.value,
    };
  }, []);

  const onChangeHandler = useCallback((v: TVoiceOption) => {
    options.current = {
      ...options.current,
      ...v,
    };
  }, []);

  return (
    <>
      <S.Textarea
        placeholder={t('textArea.placeholder')}
        defaultValue={data.text}
        onChange={onChangeText}
      />
      <S.VoiceOptions defaultVoiceOptions={data} onChange={onChangeHandler} />
      {/*<S.VoiceSelect defaultOptions={data} />*/}
    </>
  );
};

export default ProjectTextPage;
