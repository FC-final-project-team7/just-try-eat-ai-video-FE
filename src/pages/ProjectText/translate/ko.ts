import { KLabelMapper } from './mapper';

import {
  KVoiceSelectDataKeyMapper,
  KVoiceOptionDataKeyMapper,
  KVoiceSelectServerValueMapper,
} from '~/types/project/voices';

export const KO = {
  [KLabelMapper.textArea]: {
    placeholder: '텍스트를 입력하세요.',
  },
  [KLabelMapper.voiceOption]: {
    prelisten: '미리듣기',
    [KVoiceOptionDataKeyMapper.speed]: '속도 조절',
    [KVoiceOptionDataKeyMapper.pitch]: '톤 조절',
    tones: {
      low: '로우톤',
      center: '기본',
      high: '하이톤',
    },
    [KVoiceOptionDataKeyMapper.durationSilence]: '문장간격',
    second: '초',
    ratio: (v: string) => `${v} 배`,
  },
  [KLabelMapper.avatarVoiceSelect]: {
    [KVoiceSelectDataKeyMapper.language]: {
      label: `언어`,
      [KVoiceSelectServerValueMapper.language.korean]: '한국어',
      [KVoiceSelectServerValueMapper.language.english]: '영어',
      [KVoiceSelectServerValueMapper.language.chinese]: '중국어',
    },
    [KVoiceSelectDataKeyMapper.sex]: {
      label: `성별`,
      [KVoiceSelectServerValueMapper.sex.FEMALE]: '여자',
      [KVoiceSelectServerValueMapper.sex.MALE]: '남자',
    },
    [KVoiceSelectDataKeyMapper.avatarAudio]: {
      label: '아바타 음성 선택',
    },
  },
} as const;
