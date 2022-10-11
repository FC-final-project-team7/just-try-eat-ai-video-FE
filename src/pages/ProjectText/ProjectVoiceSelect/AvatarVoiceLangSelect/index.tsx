import { ChangeEvent, useCallback } from 'react';

import { useTranslate } from '../../translate/hooks';
import * as S from './styles';

import { kAvatarVoiceLangSelectOption } from '../constants';

interface Props {
  id: string;
  defaultValue: string;
  onChange: (e: { name: string; value: string }) => void;
}

// TODO 디자인에 맞춰야 하나? 난이도 꽤 높은데
// 대충 만들면 만들만 한데 이거랑 맞춰야?
// https://www.w3.org/WAI/ARIA/apg/example-index/combobox/combobox-select-only.html
const AvatarVoiceLangSelect = (props: Props) => {
  const { id, defaultValue, onChange } = props;
  const { t } = useTranslate();

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    onChange({
      name: kAvatarVoiceLangSelectOption.key,
      value: e.currentTarget.value,
    });
  }, []);

  return (
    <S.Select id={id} onChange={onChangeHandler}>
      {kAvatarVoiceLangSelectOption.options.map((option) => (
        <S.Option
          key={option.key}
          value={option.key}
          defaultChecked={defaultValue === option.key}
        >
          {t(option.labelKey)}
        </S.Option>
      ))}
    </S.Select>
  );
};

export default AvatarVoiceLangSelect;
