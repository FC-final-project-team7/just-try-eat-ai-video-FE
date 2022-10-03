import * as S from '~/pages/ProjectText/ProjectVoiceOptions/Slider/styles';

type Props = Omit<JSX.IntrinsicElements['input'], 'type' | 'className'> & {
  id: string;
  className?: string;
  dataList: Array<{ value: string | number; text: string }>;
};

// TODO track 에 점은 나중에 더럽게 어렵네
const Slider = (props: Props) => {
  const { id, className, dataList } = props;
  return (
    <S.Container className={className}>
      <S.StyledSlider
        id={id}
        min="-0.5"
        max="0.5"
        step="0.1"
        dataList={`${id}-dataList`}
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

export default Slider;
