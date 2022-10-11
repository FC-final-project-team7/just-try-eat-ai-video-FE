import { TValue } from '~/types/types';

export const KVoiceOptionMapper = {
  durationSilence: 'durationSilence',
  pitch: 'pitch',
  speed: 'speed',
} as const;

export type TVoiceOption = {
  [KVoiceOptionMapper.durationSilence]: number;
  [KVoiceOptionMapper.pitch]: number;
  [KVoiceOptionMapper.speed]: number;
};

export const KVoiceSelectMapper = {
  sex: 'sex',
  language: 'language',
  avatarAudio: 'avatarAudio',
} as const;

export type TVoiceSelect = {
  [KVoiceSelectMapper.sex]: TVoiceSex;
  [KVoiceSelectMapper.language]: TVoiceLanguage;
  [KVoiceSelectMapper.avatarAudio]: string;
};

export const KVoiceSelectValueMapper = {
  [KVoiceSelectMapper.sex]: {
    ['남자']: '남자',
    ['여자']: '여자',
  },
  [KVoiceSelectMapper.language]: {
    ['한국어']: '한국어',
    ['영어']: '영어',
    ['중국어']: '중국어',
  },
} as const;

export type TVoiceSex = TValue<typeof KVoiceSelectValueMapper.sex>;

export type TVoiceLanguage = TValue<typeof KVoiceSelectValueMapper.language>;
