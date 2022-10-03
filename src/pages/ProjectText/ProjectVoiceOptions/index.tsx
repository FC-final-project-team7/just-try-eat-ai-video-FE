import * as S from '~/pages/ProjectText/ProjectVoiceOptions/styles';

interface Props {}

const speedDataList = [
  { value: '-0.5', text: '0.5배' },
  { value: '0', text: '1배' },
  { value: '0.5', text: '1.5배' },
];

const toneDataList = [
  { value: '-0.5', text: '로우톤' },
  { value: '0', text: '기본' },
  { value: '0.5', text: '하이톤' },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProjectVoiceOptions = (props: Props) => {
  return (
    <S.Container>
      <S.SliderContainer>
        <S.Label htmlFor="speed-slider">속도 조절</S.Label>
        <S.Slider id="speed-slider" dataList={speedDataList} />
      </S.SliderContainer>
      <S.SliderContainer>
        <S.Label htmlFor="tone-slider">톤 조절</S.Label>
        <S.Slider id="tone-slider" dataList={toneDataList} />
      </S.SliderContainer>
    </S.Container>
  );
};

export default ProjectVoiceOptions;
