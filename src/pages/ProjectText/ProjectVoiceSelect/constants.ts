import { tk } from '../translate/hooks';

import ObjectEx from '~/utils/ObjectEx';

import {
  KVoiceSelectMapper,
  KVoiceSelectValueMapper,
} from '~/types/project/voices';

// https://vitejs.dev/guide/features.html#glob-import
// 나중에 여기저기서 쓰이면 잘 이동해야 됨
const _voices = import.meta.glob('./assets/voices/*.wav', {
  eager: true,
  as: 'url',
});
const voicesFiles = Object.fromEntries(
  Object.entries(_voices).map(([key, value]) => [
    key.replace('./assets/voices/', '').replace('.wav', ''),
    value,
  ])
);

const { language: languageValues, sex: sexValues } = KVoiceSelectValueMapper;

const voicesFileMapper = {
  key: {
    [languageValues['한국어']]: 'kor',
    [languageValues['영어']]: 'eng',
    [languageValues['중국어']]: 'chi',
  } as Record<string, string>,
  sex: {
    [sexValues['여자']]: 'w',
    [sexValues['남자']]: 'm',
  } as Record<string, string>,
};

// noinspection SpellCheckingInspection
const _avatarVoiceList = {
  [languageValues['한국어']]: {
    key: languageValues['한국어'],
    labelKey: tk('avatarVoiceSelect.language.한국어'),
    voices: {
      [sexValues['여자']]: [
        {
          key: '가영',
          prelistenUrl: '',
        },
        {
          key: '나영',
          prelistenUrl: '',
        },
        {
          key: '다영',
          prelistenUrl: '',
        },
        {
          key: '라영',
          prelistenUrl: '',
        },
      ],
      [sexValues['남자']]: [
        {
          key: '가온',
          prelistenUrl: '',
        },
        {
          key: '나온',
          prelistenUrl: '',
        },
        {
          key: '다온',
          prelistenUrl: '',
        },
        {
          key: '라온',
          prelistenUrl: '',
        },
        {
          key: '마온',
          prelistenUrl: '',
        },
      ],
    },
  },
  [languageValues['영어']]: {
    key: languageValues['영어'],
    labelKey: tk('avatarVoiceSelect.language.영어'),
    voices: {
      [sexValues['여자']]: [
        {
          key: 'Abbi',
          prelistenUrl: '',
        },
        {
          key: 'Bella',
          prelistenUrl: '',
        },
        {
          key: 'Hollie',
          prelistenUrl: '',
        },
        {
          key: 'Libby',
          prelistenUrl: '',
        },
        {
          key: 'Maisie',
          prelistenUrl: '',
        },
        {
          key: 'Olivia',
          prelistenUrl: '',
        },
        {
          key: 'Amber',
          prelistenUrl: '',
        },
        {
          key: 'Aria',
          prelistenUrl: '',
        },
        {
          key: 'Ashley',
          prelistenUrl: '',
        },
        {
          key: 'Cora',
          prelistenUrl: '',
        },
        {
          key: 'Elizabeth',
          prelistenUrl: '',
        },
        {
          key: 'Jenny',
          prelistenUrl: '',
        },
        {
          key: 'Michelle',
          prelistenUrl: '',
        },
        {
          key: 'Monica',
          prelistenUrl: '',
        },
        {
          key: 'Sara',
          prelistenUrl: '',
        },
      ],
      [sexValues['남자']]: [
        {
          key: 'Alfie',
          prelistenUrl: '',
        },
        {
          key: 'Elliot',
          prelistenUrl: '',
        },
        {
          key: 'Ethan',
          prelistenUrl: '',
        },
        {
          key: 'Noah',
          prelistenUrl: '',
        },
        {
          key: 'Oliver',
          prelistenUrl: '',
        },
        {
          key: 'Ryan',
          prelistenUrl: '',
        },
        {
          key: 'Thomas',
          prelistenUrl: '',
        },
        {
          key: 'Brandon',
          prelistenUrl: '',
        },
        {
          key: 'Christopher',
          prelistenUrl: '',
        },
        {
          key: 'Eric',
          prelistenUrl: '',
        },
        {
          key: 'Guy',
          prelistenUrl: '',
        },
        {
          key: 'Jacob',
          prelistenUrl: '',
        },
      ],
    },
  },
  [languageValues['중국어']]: {
    key: languageValues['중국어'],
    labelKey: tk('avatarVoiceSelect.language.중국어'),
    voices: {
      [sexValues['여자']]: [
        {
          key: 'HiuGaai(광둥어)',
          prelistenUrl: '',
        },
        {
          key: 'HiuMaan(광둥어)',
          prelistenUrl: '',
        },
        {
          key: 'HsiaoChen(대만어)',
          prelistenUrl: '',
        },
        {
          key: 'HsiaoYu(대만어)',
          prelistenUrl: '',
        },
        {
          key: 'Xiaochen(북경어)',
          prelistenUrl: '',
        },
        {
          key: 'Xiaohan(북경어)',
          prelistenUrl: '',
        },
        {
          key: 'Xiaomo(북경어)',
          prelistenUrl: '',
        },
        {
          key: 'Xiaoqiu(북경어)',
          prelistenUrl: '',
        },
        {
          key: 'Xiaorui(북경어)',
          prelistenUrl: '',
        },
        {
          key: 'Xiaoshuang(북경어)',
          prelistenUrl: '',
        },
        {
          key: 'Xiaoxiao(북경어)',
          prelistenUrl: '',
        },
        {
          key: 'Xiaoxuan(북경어)',
          prelistenUrl: '',
        },
        {
          key: 'Xiaoyan(북경어)',
          prelistenUrl: '',
        },
        {
          key: 'Xiaoyou(북경어)',
          prelistenUrl: '',
        },
        {
          key: 'WanLung(광둥어)',
          prelistenUrl: '',
        },
      ],
      [sexValues['남자']]: [
        {
          key: 'YunJhe(대만어)',
          prelistenUrl: '',
        },
        {
          key: 'Yunxi(북경어)',
          prelistenUrl: '',
        },
        {
          key: 'Yunyang(북경어)',
          prelistenUrl: '',
        },
        {
          key: 'Yunye(북경어)',
          prelistenUrl: '',
        },
      ],
    },
  },
} as const;

export type TVoice = {
  key: string;
  prelistenUrl: string;
};

export const kAvatarVoiceList = ObjectEx.mapValue(
  _avatarVoiceList,
  ([, avatarVoice]) => ({
    ...avatarVoice,
    voices: ObjectEx.mapValue(
      avatarVoice.voices as {
        readonly [sex: string]: readonly TVoice[];
      },
      ([sex, voiceList]) =>
        voiceList.map((voice, voiceIdx) => ({
          ...voice,
          prelistenUrl:
            voicesFiles[
              `${voicesFileMapper.key[avatarVoice.key]}_${
                voicesFileMapper.sex[sex]
              }_${voiceIdx + 1}`
            ],
        }))
    ),
  })
);

export const kAvatarVoiceSexOption = {
  key: KVoiceSelectMapper.sex,
  labelKey: tk('avatarVoiceSelect.sex.label'),
  radioList: Object.values(sexValues).map((v) => ({
    key: v,
    labelKey: tk(`avatarVoiceSelect.sex.${v}`),
  })),
};

export const kAvatarVoiceLangSelectOption = {
  key: KVoiceSelectMapper.language,
  labelKey: tk('avatarVoiceSelect.language.label'),
  options: Object.values(languageValues).map((v) => ({
    key: v,
    labelKey: tk(`avatarVoiceSelect.language.${v}`),
  })),
};

export const kAvatarVoiceOption = {
  key: KVoiceSelectMapper.avatarAudio,
  labelKey: tk('avatarVoiceSelect.avatarAudio.label'),
};
