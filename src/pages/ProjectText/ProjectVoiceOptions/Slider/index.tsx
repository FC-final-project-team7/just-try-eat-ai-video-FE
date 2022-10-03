import * as S from '~/pages/ProjectText/ProjectVoiceOptions/Slider/styles';
import { ChangeEvent, useCallback, useMemo } from 'react';
import { getDefaultNumber } from '~/utils/number';

type Props = {
  className?: string;

  id: string;
  step: number;
  value?: number;
  onChange?: (e: { id: string; value: number }) => void;
  disabled?: boolean;

  dataList: Array<{ value: number; text: string }>;
};

const defaultValue: Partial<Props> = {
  disabled: false,
};

// TODO track 에 점은 나중에 더럽게 어렵네
const Slider = (props: Props) => {
  const { id } = props;

  const { className, dataList, onChange, ...sliderProps } = props;
  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.({ id, value: getDefaultNumber(e.target.value) });
    },
    [onChange, id]
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
        list={`${id}-dataList`}
      />

      <S.Datalist id={`${id}-dataList`}>
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
