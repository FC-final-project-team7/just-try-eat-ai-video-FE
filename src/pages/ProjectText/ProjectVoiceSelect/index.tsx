import { useCallback, useMemo, useState } from 'react';

import AvatarVoiceSexRadioButtons from './AvatarVoiceSexRadioButtons';
import AvatarVoiceLangSelect from './AvatarVoiceLangSelect';
import * as S from './styles';

import { useAudio, useOptions } from './hooks';
import { useTranslate } from '../translate/hooks';

import {
  kAvatarVoiceLangSelectOption,
  kAvatarVoiceList,
  kAvatarVoiceOption,
  kAvatarVoiceSexOption,
  TVoice,
} from './constants';

import { IVoiceSelect } from '~/types/project/voices';

interface Props {
  className?: string;
  defaultOptions: IVoiceSelect;
  onChange: (e: IVoiceSelect) => void;
}

// TODO 최적화
const ProjectVoiceSelect = (props: Props) => {
  const { className, defaultOptions: baseDefaultOptions, onChange } = props;
  const { t } = useTranslate();

  const { options, onChangeHandler } = useOptions(baseDefaultOptions, onChange);
  const [defaultOption] = useState({ ...options });

  const onSelectVoiceHandler = useCallback(
    (e: { name: string; value: string }) => {
      onChangeHandler(e);
    },
    [onChangeHandler]
  );

  const voiceList = useMemo(() => {
    const { language, sex } = options;
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
          defaultValue={defaultOption.sex}
          onChange={onChangeHandler}
        />
      </S.SexGroup>
      <S.LangGroup>
        <S.Label aria-labelledby="voice-lang-select-head">
          {t(kAvatarVoiceLangSelectOption.labelKey)}
        </S.Label>
        <AvatarVoiceLangSelect
          id="voice-lang-select-head"
          defaultValue={defaultOption.language}
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
              defaultChecked={defaultOption.avatarAudio === voice.key}
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
