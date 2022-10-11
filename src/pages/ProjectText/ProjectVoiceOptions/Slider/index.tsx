import { ChangeEvent, useCallback, useMemo } from 'react';

import * as S from './styles';

import { useTranslate } from '../../translate/hooks';

import { makeDefaultProps } from '~/utils/makeDefaultProps';
import { getDefaultNumber } from '~/utils/number';

type Props = {
  className?: string;

  name: string;
  step: number;
  value?: number;
  onChange?: (e: { name: string; value: number }) => void;
  disabled?: boolean;

  dataList: Array<{ value: number; labelKey: string | object }>;
};

const defaultProps = makeDefaultProps<Props>()({
  disabled: false,
});

// TODO track 에 점은 나중에 더럽게 어렵네
const Slider = (props: Props) => {
  const { name } = props;
  const { className, dataList, onChange, ...sliderProps } = {
    ...defaultProps,
    ...props,
  };
  const { tu } = useTranslate();

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
      <S.Slider
        {...sliderProps}
        onChange={onChangeHandler}
        min={min}
        max={max}
        list={`${name}-dataList`}
      />
      <S.Datalist id={`${name}-dataList`}>
        {dataList.map(({ value, labelKey }) => (
          <option key={value} value={value}>
            {tu(labelKey)}
          </option>
        ))}
      </S.Datalist>
    </S.Container>
  );
};

export default Slider;
