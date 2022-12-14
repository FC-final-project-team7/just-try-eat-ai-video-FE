import { tk } from '../translate/hooks';
import { KVoiceOptionDataKeyMapper } from '~/types/project/voices';

export const kSliderList = [
  {
    key: KVoiceOptionDataKeyMapper.speed,
    labelKey: tk('voiceOption.speed'),
    props: {
      step: 0.1,
      dataList: [
        { value: -0.5, labelKey: tk({ k: 'voiceOption.ratio', v: '0.5' }) },
        { value: 0.0, labelKey: tk({ k: 'voiceOption.ratio', v: '1' }) },
        { value: 0.5, labelKey: tk({ k: 'voiceOption.ratio', v: '1.5' }) },
      ],
    },
  },
  {
    key: KVoiceOptionDataKeyMapper.pitch,
    labelKey: tk('voiceOption.pitch'),
    props: {
      step: 0.1,
      dataList: [
        { value: -0.5, labelKey: tk('voiceOption.tones.low') },
        { value: 0.0, labelKey: tk('voiceOption.tones.center') },
        { value: 0.5, labelKey: tk('voiceOption.tones.high') },
      ],
    },
  },
];

const kTextInputList = [
  {
    key: KVoiceOptionDataKeyMapper.durationSilence,
    labelKey: tk('voiceOption.durationSilence'),
    props: {
      step: 0.1,
      min: 0.1,
      max: 1.0,
    },
  },
];

export const kSentenceOption = kTextInputList[0];
