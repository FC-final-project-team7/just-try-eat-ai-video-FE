import { useCallback } from 'react';

import * as S from '~/pages/ProjectText/ProjectVoiceOptions/styles';

interface Props {
  className?: string;
}

const dataList = [
  {
    id: 'speed-slider',
    label: '속도 조절',
    step: 0.1,
    dataList: [
      { value: -0.5, text: '0.5배' },
      { value: 0.0, text: '1배' },
      { value: 0.5, text: '1.5배' },
    ],
  },
  {
    id: 'tone-slider',
    label: '톤 조절',
    step: 0.1,
    dataList: [
      { value: -0.5, text: '로우톤' },
      { value: 0.0, text: '기본' },
      { value: 0.5, text: '하이톤' },
    ],
  },
];

const ProjectVoiceOptions = (props: Props) => {
  const { className } = props;

  const onSliderHandler = useCallback((e: { id: string; value: number }) => {
    const { id, value } = e;
    console.log('ProjectVoiceOptions', id, value);
  }, []);

  return (
    <S.Container className={className}>
      {dataList.map((data) => (
        <S.SliderContainer key={data.id}>
          <S.Label htmlFor={data.id}>{data.label}</S.Label>
          <S.Slider
            id={data.id}
            step={data.step}
            dataList={data.dataList}
            onChange={onSliderHandler}
          />
        </S.SliderContainer>
      ))}
    </S.Container>
  );
};

export default ProjectVoiceOptions;
