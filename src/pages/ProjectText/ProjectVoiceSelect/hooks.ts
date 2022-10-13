import { useCallback, useState } from 'react';
import {
  IVoiceSelect,
  KVoiceSelectServerValueMapper,
} from '~/types/project/voices';
import { findLangSexKey } from '~/pages/ProjectText/ProjectVoiceSelect/constants';

export const useOptions = (
  defaultOptions: IVoiceSelect,
  onChange: (e: IVoiceSelect) => void
): {
  options: IVoiceSelect;
  onChangeHandler: ({ name, value }: { name: string; value: string }) => void;
} => {
  const [options, setOptions] = useState<IVoiceSelect>((): IVoiceSelect => {
    const { avatarAudio, ...keys } = defaultOptions;
    if (avatarAudio) {
      const findedKeys = findLangSexKey(avatarAudio);
      if (findedKeys) {
        ({ sex: keys.sex, language: keys.language } = findedKeys);
      }
    }
    keys.language =
      keys.language || KVoiceSelectServerValueMapper.language.korean;
    keys.sex = keys.sex || KVoiceSelectServerValueMapper.sex.FEMALE;

    const n = {
      ...keys,
      avatarAudio,
    };
    onChange(n);
    return n;
  });
  const onChangeHandler = useCallback(
    ({ name, value }: { name: string; value: string }) => {
      setOptions((p) => {
        const n = {
          ...p,
          [name]: value,
        };
        onChange(n);
        return n;
      });
    },
    []
  );
  return { options, onChangeHandler };
};
