import { useCallback, useState } from 'react';

import * as S from './styles';
import * as I from './itemStyles';
import { useAudio } from '~/hooks/useAudio';
import { useCreateAudioSentenceMutation } from '~/stores/apis/projectSentence';

import { useTranslate } from '../translate/hooks';
import { ISentence } from '~/types/project/sentence';

import { ReactComponent as PlaySVG } from '~/assets/icons/play.svg';
import { ReactComponent as StopSVG } from '~/assets/icons/stop.svg';

interface Props {
  className?: string;
  projectId: number;
  defaultList: ISentence[];
  onCreated: (e: { idx: number; sentence: string }) => void;
}

const EditSentence = (props: Props) => {
  const { className, projectId, defaultList, onCreated } = props;
  const { t } = useTranslate();

  const { play, stop } = useAudio('sentence');

  const [sentenceList, setSentenceList] = useState<
    (ISentence & { isCreating: boolean; isChanged: boolean })[]
  >(() =>
    defaultList.map((sentence) => ({
      ...sentence,
      isCreating: false,
      isChanged: false,
    }))
  );

  const onChangeSentence = ({
    idx,
    sentence,
  }: {
    idx: number;
    sentence: string;
  }) => {
    setSentenceList((p) => {
      const { sentence: prevSentence, isCreating } = p[idx];
      if (isCreating || prevSentence === sentence) return p;

      const n = [...p];
      n[idx] = {
        ...p[idx],
        sentence,
        isCreating: false,
        isChanged: true,
      };

      return n;
    });
  };

  const onControlHandler = useCallback(
    ({ cmd, idx }: { cmd: 'play' | 'stop'; idx: number }) => {
      const { isCreating, isChanged, sentenceAudio: src } = sentenceList[idx];
      if (isCreating || isChanged || !src) return;

      if (cmd === 'play') {
        play(src);
      } else if (cmd === 'stop') {
        stop(src);
      }
    },
    [sentenceList]
  );

  const [createAudioSentenceRequest] = useCreateAudioSentenceMutation();
  const createAudioSentence = async ({ idx }: { idx: number }) => {
    const {
      isCreating,
      isChanged,
      sentenceAudio: src,
      sentence: text,
    } = sentenceList[idx];
    if (isCreating || !isChanged || !src) return;

    try {
      setSentenceList((p) => {
        const n = [...p];
        n[idx] = {
          ...n[idx],
          isCreating: true,
        };
        return n;
      });

      const data = await createAudioSentenceRequest({
        audioUrl: src,
        text,
        projectId,
      }).unwrap();
      onCreated({ idx, sentence: text });
      setSentenceList((p) => {
        const n = [...p];
        n[idx] = {
          ...n[idx],
          sentenceAudio: data.audioUrl,
          isCreating: false,
          isChanged: false,
        };
        return n;
      });
    } catch (e) {
      setSentenceList((p) => {
        const n = [...p];
        n[idx] = {
          ...n[idx],
          isCreating: false,
        };
        return n;
      });
    }
  };

  const onClickCreateHandler = useCallback(
    ({ idx }: { idx: number }) => {
      createAudioSentence({ idx });
    },
    [sentenceList]
  );

  return (
    <S.Container className={className}>
      {/*<S.AllApplyButton>{t('sentenceList.allApply')}</S.AllApplyButton>*/}
      <S.SentenceList>
        {sentenceList.map((sentence, idx) => (
          <I.SentenceListItem key={idx}>
            <I.NumberLabel>{idx + 1}</I.NumberLabel>
            <I.SentenceInput
              defaultValue={sentence.sentence}
              onChange={(e) =>
                onChangeSentence({ idx, sentence: e.currentTarget.value })
              }
              disabled={sentence.isCreating}
            />
            <I.IconButton
              onClick={() => onControlHandler({ cmd: 'play', idx })}
              disabled={
                !sentence.sentenceAudio ||
                sentence.isCreating ||
                sentence.isChanged
              }
            >
              <I.StyledSVG $svgr={PlaySVG} />
            </I.IconButton>
            <I.IconButton
              onClick={() => onControlHandler({ cmd: 'stop', idx })}
              disabled={
                !sentence.sentenceAudio ||
                sentence.isCreating ||
                sentence.isChanged
              }
            >
              <I.StyledSVG $svgr={StopSVG} />
            </I.IconButton>
            <I.CreateButton
              onClick={() => onClickCreateHandler({ idx })}
              disabled={sentence.isCreating || !sentence.isChanged}
            >
              {t('sentenceList.create')}
            </I.CreateButton>
          </I.SentenceListItem>
        ))}
      </S.SentenceList>
    </S.Container>
  );
};

export default EditSentence;
