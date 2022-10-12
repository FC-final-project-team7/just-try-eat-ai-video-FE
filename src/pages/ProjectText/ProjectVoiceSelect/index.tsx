import { useCallback, useMemo, useState } from 'react';

import AvatarVoiceSexRadioButtons from './AvatarVoiceSexRadioButtons';
import AvatarVoiceLangSelect from './AvatarVoiceLangSelect';
import * as S from './styles';

import { useAudio } from './hooks';
import { useTranslate } from '../translate/hooks';

import {
  kAvatarVoiceLangSelectOption,
  kAvatarVoiceOption,
  kAvatarVoiceSexOption,
} from './constants';
import { kAvatarVoiceList, TVoice } from './constants';

import {
  IVoiceSelect,
  KVoiceSelectServerValueMapper,
} from '~/types/project/voices';

interface Props {
  className?: string;
  defaultOptions: IVoiceSelect;
}

// TODO 최적화
const ProjectVoiceSelect = (props: Props) => {
  const { className, defaultOptions } = props;
  const { t } = useTranslate();

  const [options, setOptions] = useState({ ...defaultOptions });
  const onChangeHandler = useCallback(
    ({ name, value }: { name: string; value: string }) => {
      setOptions((p) => ({
        ...p,
        [name]: value,
      }));
    },
    []
  );

  const onSelectVoiceHandler = useCallback(
    (e: { name: string; value: string }) => {
      const { value } = e;
      onChangeHandler(e);
      console.log(value);
    },
    [onChangeHandler]
  );

  const voiceList = useMemo(() => {
    const {
      language = KVoiceSelectServerValueMapper.language.korean,
      sex = KVoiceSelectServerValueMapper.sex.FEMALE,
    } = options;
    // ANCHOR 보여주는 리스트가 선택된 애가 우선인지 서버에 저장된 language/sex 우선인지
    return kAvatarVoiceList[language].voices[sex];
  }, [options]);

  const { play, stop } = useAudio();
  const onPlayHandler = useCallback((voice: TVoice) => {
    play(voice.prelistenUrl);
  }, []);
  const onStopHandler = useCallback(() => {
    stop();
  }, []);

  return (
    <S.Container className={className}>
      {/*https://www.w3.org/WAI/tutorials/forms/grouping/
        <fieldset> <legend> 가 flex 로 제대로 안 됨
      */}
      <S.SexGroup aria-labelledby="voice-sex-head">
        <S.Label as="div" id="voice-sex-head">
          {t(kAvatarVoiceSexOption.labelKey)}
        </S.Label>
        <AvatarVoiceSexRadioButtons
          defaultValue={defaultOptions.sex}
          onChange={onChangeHandler}
        />
      </S.SexGroup>
      <S.LangGroup>
        <S.Label aria-labelledby="voice-lang-select-head">
          {t(kAvatarVoiceLangSelectOption.labelKey)}
        </S.Label>
        <AvatarVoiceLangSelect
          id="voice-lang-select-head"
          defaultValue={defaultOptions.language}
          onChange={onChangeHandler}
        />
      </S.LangGroup>
      <S.VoiceGroup aria-labelledby="voice-select-head">
        <S.VoiceGroupLabel as="div" id="voice-select-head">
          {t(kAvatarVoiceOption.labelKey)}
        </S.VoiceGroupLabel>
        <S.VoiceGroupListContainer>
          {voiceList.map((voice) => (
            <S.AvatarVoiceItem
              key={voice.key}
              name={kAvatarVoiceOption.key}
              defaultChecked={defaultOptions.avatarAudio === voice.key}
              onChange={onSelectVoiceHandler}
              voice={voice}
              onPlay={onPlayHandler}
              onStop={onStopHandler}
            />
          ))}
        </S.VoiceGroupListContainer>
      </S.VoiceGroup>
    </S.Container>
  );
};

export default ProjectVoiceSelect;
