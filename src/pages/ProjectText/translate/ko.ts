import { KLabelMapper } from './mapper';

import {
  KVoiceSelectMapper,
  KVoiceSelectValueMapper,
  KVoiceOptionMapper,
} from '~/types/project/voices';

export const KO = {
  [KLabelMapper.textArea]: {
    placeholder: '텍스트를 입력하세요.',
  },
  [KLabelMapper.voiceOption]: {
    prelisten: '미리듣기',
    [KVoiceOptionMapper.speed]: '속도 조절',
    [KVoiceOptionMapper.pitch]: '톤 조절',
    tones: {
      low: '로우톤',
      center: '기본',
      high: '하이톤',
    },
    [KVoiceOptionMapper.durationSilence]: '문장간격',
    second: '초',
    ratio: (v: string) => `${v} 배`,
  },
  [KLabelMapper.avatarVoiceSelect]: {
    [KVoiceSelectMapper.language]: {
      label: `언어`,
      [KVoiceSelectValueMapper.language['한국어']]: '한국어',
      [KVoiceSelectValueMapper.language['영어']]: '영어',
      [KVoiceSelectValueMapper.language['중국어']]: '중국어',
    },
    [KVoiceSelectMapper.sex]: {
      label: `성별`,
      [KVoiceSelectValueMapper.sex['여자']]: '여자',
      [KVoiceSelectValueMapper.sex['남자']]: '남자',
    },
    [KVoiceSelectMapper.avatarAudio]: {
      label: '아바타 음성 선택',
    },
  },
} as const;
