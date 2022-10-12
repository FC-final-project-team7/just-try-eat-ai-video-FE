import { tk } from '../translate/hooks';

import ObjectEx from '~/utils/ObjectEx';

import {
  KVoiceSelectDataKeyMapper,
  KVoiceSelectServerValueMapper,
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

const { language: languageValues, sex: sexValues } =
  KVoiceSelectServerValueMapper;

const voicesFileMapper = {
  key: {
    [languageValues.korean]: 'kor',
    [languageValues.english]: 'eng',
    [languageValues.chinese]: 'chi',
  } as Record<string, string>,
  sex: {
    [sexValues.FEMALE]: 'w',
    [sexValues.MALE]: 'm',
  } as Record<string, string>,
};

// noinspection SpellCheckingInspection
const _avatarVoiceList = {
  [languageValues.korean]: {
    key: languageValues.korean,
    labelKey: tk('avatarVoiceSelect.language.label'),
    voices: {
      [sexValues.FEMALE]: [
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
      [sexValues.MALE]: [
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
  [languageValues['english']]: {
    key: languageValues['english'],
    labelKey: tk('avatarVoiceSelect.language.english'),
    voices: {
      [sexValues.FEMALE]: [
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
      [sexValues.MALE]: [
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
  [languageValues.chinese]: {
    key: languageValues.chinese,
    labelKey: tk('avatarVoiceSelect.language.chinese'),
    voices: {
      [sexValues.FEMALE]: [
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
      [sexValues.MALE]: [
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
  key: KVoiceSelectDataKeyMapper.sex,
  labelKey: tk('avatarVoiceSelect.sex.label'),
  radioList: Object.values(sexValues).map((v) => ({
    key: v,
    labelKey: tk(`avatarVoiceSelect.sex.${v}`),
  })),
};

export const kAvatarVoiceLangSelectOption = {
  key: KVoiceSelectDataKeyMapper.language,
  labelKey: tk('avatarVoiceSelect.language.label'),
  options: Object.values(languageValues).map((v) => ({
    key: v,
    labelKey: tk(`avatarVoiceSelect.language.${v}`),
  })),
};

export const kAvatarVoiceOption = {
  key: KVoiceSelectDataKeyMapper.avatarAudio,
  labelKey: tk('avatarVoiceSelect.avatarAudio.label'),
};
