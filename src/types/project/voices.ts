import { TValue } from '~/types/types';

export const KVoiceOptionDataKeyMapper = {
  durationSilence: 'durationSilence',
  pitch: 'pitch',
  speed: 'speed',
} as const;

export interface IVoiceOption {
  [KVoiceOptionDataKeyMapper.durationSilence]: number;
  [KVoiceOptionDataKeyMapper.pitch]: number;
  [KVoiceOptionDataKeyMapper.speed]: number;
}

export const KVoiceSelectDataKeyMapper = {
  sex: 'sex',
  language: 'language',
  avatarAudio: 'avatarAudio',
} as const;

export interface IVoiceSelect {
  [KVoiceSelectDataKeyMapper.sex]: TVoiceSex;
  [KVoiceSelectDataKeyMapper.language]: TVoiceLanguage;
  [KVoiceSelectDataKeyMapper.avatarAudio]: string;
}

export type TVoiceSex = TValue<typeof KVoiceSelectServerValueMapper.sex>;
export type TVoiceLanguage = TValue<
  typeof KVoiceSelectServerValueMapper.language
>;

export const KVoiceSelectServerValueMapper = {
  [KVoiceSelectDataKeyMapper.sex]: {
    MALE: 'MALE',
    FEMALE: 'FEMALE',
  },
  [KVoiceSelectDataKeyMapper.language]: {
    ['korean']: 'korean',
    ['english']: 'english',
    ['chinese']: 'chinese',
  },
} as const;
