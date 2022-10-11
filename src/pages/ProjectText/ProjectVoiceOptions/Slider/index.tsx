import * as S from '~/pages/ProjectText/ProjectVoiceOptions/Slider/styles';
import { ChangeEvent, useCallback, useMemo } from 'react';
import { getDefaultNumber } from '~/utils/number';

type Props = {
  className?: string;

  name: string;
  step: number;
  value?: number;
  onChange?: (e: { name: string; value: number }) => void;
  disabled?: boolean;

  dataList: Array<{ value: number; text: string }>;
};

const defaultValue: Partial<Props> = {
  disabled: false,
};

// TODO track 에 점은 나중에 더럽게 어렵네
const Slider = (props: Props) => {
  const { name } = props;

  const { className, dataList, onChange, ...sliderProps } = props;
  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.({ name, value: getDefaultNumber(e.target.value) });
    },
    [onChange, name]
  );

  const [min, max] = useMemo(() => {
    return [dataList[0].value, dataList[dataList.length - 1].value];
  }, dataList);

  return (
    <S.Container className={className}>
      <S.StyledSlider
        {...sliderProps}
        onChange={onChangeHandler}
        min={min}
        max={max}
        list={`${name}-dataList`}
      />

      <S.Datalist id={`${name}-dataList`}>
        {dataList.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </S.Datalist>
    </S.Container>
  );
};

Slider.defaultValue = defaultValue;

export default Slider;
