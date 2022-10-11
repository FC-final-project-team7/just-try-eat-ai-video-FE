import { ChangeEvent } from 'react';

import * as S from './styles';

import { useTranslate } from '../../translate/hooks';

import { kAvatarVoiceSexOption } from '../constants';

import { TVoiceSex } from '~/types/project/voices';

interface Props {
  defaultValue: string;
  onChange: (e: { name: string; value: TVoiceSex }) => void;
}

const AvatarVoiceSexRadioButtons = (props: Props) => {
  const { defaultValue, onChange } = props;
  const { t } = useTranslate();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange({
      name: kAvatarVoiceSexOption.key,
      value: e.currentTarget.value as TVoiceSex,
    });
  };

  return (
    <S.Container>
      {kAvatarVoiceSexOption.radioList.map((radio) => (
        <S.Label key={radio.key}>
          <S.RadioButton
            name={kAvatarVoiceSexOption.key}
            value={radio.key}
            onChange={onChangeHandler}
            defaultChecked={defaultValue === radio.key}
          />
          <S.Contents>{t(radio.labelKey)}</S.Contents>
        </S.Label>
      ))}
    </S.Container>
  );
};

export default AvatarVoiceSexRadioButtons;
